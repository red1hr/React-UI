import React, { Component } from "react";
import Appointment from "./Appointment";

import styled from "styled-components";

const AptsList = styled.div`
  font-size: 1.1em;
`;

class ListAppointments extends Component {
  render() {
    return (
      <AptsList className={`item-list mb-3 ${this.props.className}`}>
        {this.props.appointments.map(item => (
          <Appointment
            key={item.aptId}
            item={item}
            deleteAppointments={this.props.deleteAppointments}
          />
        ))}
      </AptsList>
    );
  }
}

export default ListAppointments;
