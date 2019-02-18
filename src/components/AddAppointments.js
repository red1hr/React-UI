import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";

import styled from "styled-components";

const CardBody = styled.div`
  display: none;
`;

class AddAppointments extends Component {
  state = {
    petName: "",
    ownerName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: ""
  };

  handleChange = e => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const apt = {
      petName: this.state.petName,
      ownerName: this.state.ownerName,
      aptDate: this.state.aptDate,
      aptTime: this.state.aptTime,
      aptNotes: this.state.aptNotes
    };

    this.props.AddAppointment(apt);

    this.setState({
      petName: "",
      ownerName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: ""
    });

    this.props.toggleForm();
  };

  render() {
    return (
      <div
        className={
          "card textcenter mt-3" +
          (this.props.displayForm ? "" : " add-appointment")
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white "
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleSubmit}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="petName"
                readOnly
              >
                Pet Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="petName"
                  placeholder="Pet's Name"
                  value={this.state.petName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="ownerName"
              >
                Pet Owner
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="ownerName"
                  placeholder="Owner's Name"
                  value={this.state.ownerName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="aptDate"
                  id="aptDate"
                  value={this.state.aptDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                  value={this.state.aptNotes}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;
