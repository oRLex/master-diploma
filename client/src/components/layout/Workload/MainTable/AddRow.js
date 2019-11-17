import React, { Component, Fragment } from 'react';
import TextFieldGroup from '../../Helpers/TextFieldGroup';
import PropTypes from 'prop-types'
import uuid from "uuid";
import './AddRow.css'

class AddRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halfYear: "",
      trainningForm: "",
      faculty: "",
      disciplinesName: "",
      сourse: "",
      term: "",
      groupNumber: "",
      secondTeacher: "",
      lectionsNumb: "",
      labsNumb: "",
      consultaionsNumb: "",
      practicalNumb: "",
      ModularContNumb: "",
      ExamsNumb: "",
      drowNewLine: false,
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { toggleShow } = this.props;
    let drawAddrow = 'fade';
    if (toggleShow) {
      drawAddrow = 'show-line'
    }
    const newData = {
      _id: uuid.v4(),
      halfYear: this.state.halfYear,
      trainningForm: this.state.trainningForm,
      faculty: this.state.faculty,
      disciplinesName: this.state.disciplinesName,
      сourse: this.state.сourse,
      term: this.state.term,
      groupNumber: this.state.groupNumber,
      secondTeacher: this.state.secondTeacher,
      lectionsNumb: this.state.lectionsNumb,
      labsNumb: this.state.labsNumb,
      consultaionsNumb: this.state.consultaionsNumb,
      practicalNumb: this.state.practicalNumb,
      ModularContNumb: this.state.ModularContNumb,
      ExamsNumb: this.state.ExamsNumb
    };


    return (
      <div className={drawAddrow}>
        <button onClick={() => { this.props.addItem(newData) }}>Newline</button>
        <div key={newData._id}>
          <div className="cell">
            <TextFieldGroup
              name="halfYear"
              value={this.state.halfYear}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="trainningForm"
              value={this.state.trainningForm}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="faculty"
              value={this.state.faculty}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="disciplinesName"
              value={this.state.disciplinesName}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="term"
              value={this.state.term}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="сourse"
              value={this.state.сourse}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="groupNumber"
              value={this.state.groupNumber}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="secondTeacher"
              value={this.state.secondTeacher}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="lectionsNumb"
              value={this.state.lectionsNumb}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="labsNumb"
              value={this.state.labsNumb}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="consultaionsNumb"
              value={this.state.consultaionsNumb}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="practicalNumb"
              value={this.state.practicalNumb}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="ModularContNumb"
              value={this.state.ModularContNumb}
              onChange={this.onChange}
            />
          </div>
          <div className="cell">
            <TextFieldGroup
              name="ExamsNumb"
              value={this.state.ExamsNumb}
              onChange={this.onChange}
            />
          </div>
        </div>
      </div>

    )
  }
}

AddRow.propTypes = {
  addItem: PropTypes.func.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default AddRow;