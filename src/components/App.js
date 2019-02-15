import React from "react";

import { without } from "lodash";

import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Appointments: [],
      latestIndex: 0,
      displayForm: false
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then(data => data.json())
      .then(results => {
        const apts = results.map(item => {
          item.aptId = this.state.latestIndex;
          this.setState({ latestIndex: this.state.latestIndex + 1 });
          return item;
        });

        this.setState({
          Appointments: apts
        });
      });
  }

  handleDelete = apt => {
    let tempApts = this.state.Appointments;
    tempApts = without(tempApts, apt);

    this.setState({
      Appointments: tempApts
    });
  };

  showForm = () => {
    this.setState(prevState => ({ displayForm: !prevState.displayForm }));
  };

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div>{this.state.myName}</div>
                <AddAppointments
                  showForm={this.showForm}
                  displayForm={this.state.displayForm}
                />
                <SearchAppointments />
                <ListAppointments
                  deleteAppointments={this.handleDelete}
                  appointments={this.state.Appointments}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
