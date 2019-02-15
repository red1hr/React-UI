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
      orderBy: "petName",
      orderDir: "asc",
      queryText: "",
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

  toggleForm = () => {
    this.setState(prevState => ({ displayForm: !prevState.displayForm }));
  };

  handleAdd = apt => {
    const tempApts = this.state.Appointments;
    apt.aptId = this.state.latestIndex;

    tempApts.unshift(apt);

    this.setState({
      Appointments: tempApts,
      latestIndex: this.state.latestIndex + 1
    });
  };

  changeOrder = (order, dir) => {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  };

  searchApts = query => {
    this.setState({
      queryText: query
    });
  };

  render() {
    let order;
    let filtredApts = this.state.Appointments;
    if (this.state.orderDir === "asc") {
      order = 1;
    } else {
      order = -1;
    }

    filtredApts = filtredApts
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(eachItem => {
        return (
          eachItem["petName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["ownerName"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem["aptNotes"]
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div>{this.state.myName}</div>
                <AddAppointments
                  toggleForm={this.toggleForm}
                  displayForm={this.state.displayForm}
                  AddAppointment={this.handleAdd}
                />
                <SearchAppointments
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchApts={this.searchApts}
                />
                <ListAppointments
                  deleteAppointments={this.handleDelete}
                  appointments={filtredApts}
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
