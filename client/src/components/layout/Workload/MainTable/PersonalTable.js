import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../../validation/is-empty'
import TextFieldGroup from '../../Helpers/TextFieldGroup';
import InputGroup from '../../Helpers/InputGroup';

class PersonalTable extends Component {
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
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (prevState.data !== nextProps.data) {
      // If profile field doesnt exist, make empty string
      nextProps.data.halfYear = !isEmpty(nextProps.data.halfYear) ? nextProps.data.halfYear : '';
      nextProps.data.trainningForm = !isEmpty(nextProps.data.trainningForm) ? nextProps.data.trainningForm : '';
      nextProps.data.faculty = !isEmpty(nextProps.data.faculty) ? nextProps.data.faculty : '';

      return {
        data: nextProps.data,
        errors: nextProps.errors,
        halfYear: nextProps.data.halfYear,
        trainningForm: nextProps.data.trainningForm,
        faculty: nextProps.data.faculty,
        disciplinesName: nextProps.data.disciplinesName,
        сourse: nextProps.data.сourse,
        term: nextProps.data.term,
        groupNumber: nextProps.data.groupNumber,
        secondTeacher: nextProps.data.secondTeacher,
        lectionsNumb: nextProps.data.lectionsNumb,
        labsNumb: nextProps.data.labsNumb,
        consultaionsNumb: nextProps.data.consultaionsNumb,
        practicalNumb: nextProps.data.practicalNumb,
        ModularContNumb: nextProps.data.ModularContNumb,
        ExamsNumb: nextProps.data.ExamsNumb
      }
    }
    return null;
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { data } = this.props;
    const sendData = {
      _id: data._id,
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
    }

    // FLEX
    const dataItems = (
      <Fragment key={data._id}>
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
      </Fragment>
    )
    return (
      // FLEX
      <div className="table-row">
        <button onClick={() => { this.props.updateItem(sendData) }}></button>
        {dataItems}
      </div>

    );
  }
}

PersonalTable.propTypes = {
  data: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired,
};


export default PersonalTable;