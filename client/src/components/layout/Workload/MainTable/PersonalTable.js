import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../../../validation/is-empty'
import TextFieldGroup from '../../Helpers/TextFieldGroup';
import uuid from "uuid";
import './PersonalTable.css'

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
  showNewLine = (e) => {
    console.log('clicked')
    e.preventDefault();
    this.setState(prevState => {
      return { drowNewLine: !prevState.drowNewLine }
    })
  }
  combineValues = (e) => {
    let lectionsNumb = parseInt(this.state.lectionsNumb)
    let consultation = parseInt(this.state.consultaionsNumb)
    let practicalNumb = parseInt(this.state.practicalNumb)
    let labsNumb = parseInt(this.state.labsNumb)
    let ModularContNumb = parseInt(this.state.ModularContNumb)
    let ExamsNumb = parseInt(this.state.ExamsNumb)

    if (typeof (lectionsNumb) && typeof (consultation) && typeof (labsNumb) && typeof (practicalNumb) && typeof (ModularContNumb) && typeof (ExamsNumb) === "number") {
      let summ = lectionsNumb + consultation + labsNumb + practicalNumb + ModularContNumb + ExamsNumb
      return (summ)
    } else {
      console.log('SOMETHING GET WRONG')
    }
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
    };
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

    let drawbtns = 'fade';
    if (this.props.toggleShow) {
      console.log(this.props.toggleShow)
      drawbtns = 'show'
    }
    let toggleEdit = 'disabled'
    if (this.props.toggleShow) {
      console.log(this.props.toggleShow)
      toggleEdit = 'active'
    }

    // これはなんですか？
    const dataItems = (
      <Fragment key={data._id}>
        <div className="cell">
          <TextFieldGroup
            name="disciplinesName"
            value={this.state.disciplinesName}
            onChange={this.onChange}
            on
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="halfYear"
            value={this.state.halfYear}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="trainningForm"
            value={this.state.trainningForm}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="faculty"
            value={this.state.faculty}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="term"
            value={this.state.term}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="groupNumber"
            value={this.state.groupNumber}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="сourse"
            value={this.state.сourse}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="secondTeacher"
            value={this.state.secondTeacher}
            onChange={this.onChange}
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="lectionsNumb"
            value={this.state.lectionsNumb}
            onChange={this.onChange}
            pattern="[0-9]*"
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="labsNumb"
            value={this.state.labsNumb}
            onChange={this.onChange}
            pattern="[0-9]*"
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="consultaionsNumb"
            value={this.state.consultaionsNumb}
            onChange={this.onChange}
            pattern="[0-9]*"
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="practicalNumb"
            value={this.state.practicalNumb}
            onChange={this.onChange}
            pattern="[0-9]*"
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="ModularContNumb"
            value={this.state.ModularContNumb}
            onChange={this.onChange}
            pattern="[0-9]*"
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <TextFieldGroup
            name="ExamsNumb"
            value={this.state.ExamsNumb}
            onChange={this.onChange}
            pattern="[0-9]*"
            className={toggleEdit}
          />
        </div>
        <div className="cell">
          <span>{this.combineValues()}</span>
        </div>
      </Fragment>
    )
    return (
      // FLEX
      <Fragment>
        <div className="table-row">
          <button style={{ "width": "61px" }} onClick={() => { this.props.updateItem(sendData) }} className={drawbtns}>Saveline</button>
          {dataItems}
        </div>
      </Fragment>

    );
  }
}

PersonalTable.propTypes = {
  data: PropTypes.object.isRequired,
  updateItem: PropTypes.func.isRequired,
};


export default PersonalTable;