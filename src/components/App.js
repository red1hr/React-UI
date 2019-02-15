import React from "react";

import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      Appointments: []
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then(data => data.json())
      .then(results => {
        const apts = results.map(item => item);

        this.setState({
          Appointments: apts
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div>{this.state.myName}</div>
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
