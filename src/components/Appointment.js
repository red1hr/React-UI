import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import Moment from "react-moment";

import styled from "styled-components";

const Pet = styled.div`
  border-bottom: 1px dotted gray;
`;

const PetName = styled.span`
  font-weight: 600;
  color: #337ab7;
  font-size: 1.3em;
  line-height: 100%;
`;

const AptDate = styled.span`
  font-style: italic;
`;

const AptNotes = styled.div`
  line-height: 120%;
`;

const Label = styled.span`
  font-weight: 600;
  color: #667b82;
`;

class Appointment extends Component {
  render() {
    const item = this.props.item;
    return (
      <Pet className={`col media py-3 ${this.props.className}`}>
        <div className="mr-3">
          <button
            onClick={() => this.props.deleteAppointments(item)}
            className="pet-delete btn btn-sm btn-danger"
          >
            <FaTimes />
          </button>
        </div>

        <div className="pet-info media-body">
          <div className="pet-head d-flex">
            <PetName>{item.petName}</PetName>
            <AptDate className={`ml-auto ${this.props.className}`}>
              <Moment
                date={item.aptDate}
                parse="YYYY-MM-dd hh:mm"
                format="MMM-D h:mma"
              />
            </AptDate>
          </div>

          <div className="owner-name">
            <Label>Owner: </Label>
            <span>{item.ownerName}</span>
          </div>
          <AptNotes>{item.aptNotes}</AptNotes>
        </div>
      </Pet>
    );
  }
}

export default Appointment;
