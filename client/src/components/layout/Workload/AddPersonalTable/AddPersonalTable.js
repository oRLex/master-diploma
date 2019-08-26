import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTable } from '../../../../actions/profile'
import TextFieldGroup from '../../Helpers/TextFieldGroup'

const AddPersonalTable = ({ addTable, history }) => {
  const [formData, setFormData] = useState({
    halfYear: '',
    trainningForm: '',
    faculty: '',
    disciplinesName: '',
    term: '',
    сourse: '',
    groupNumber: '',
    secondTeacher: '',
    lectionsNumb: '',
    labsNumb: '',
    consultaionsNumb: '',
    practicalNumb: '',
    ModularContNumb: '',
    ExamsNumb: ''
  })

  const {
    halfYear,
    trainningForm,
    faculty,
    disciplinesName,
    term,
    сourse,
    groupNumber,
    secondTeacher,
    lectionsNumb,
    labsNumb,
    consultaionsNumb,
    practicalNumb,
    ModularContNumb,
    ExamsNumb } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  return (
    <Fragment>
      <form className="from" onSubmit={e => {
        e.preventDefault();
        addTable(formData, history)
      }}>
        <TextFieldGroup
          placeholder="halfYear"
          name="halfYear"
          value={halfYear}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="trainningForm"
          name="trainningForm"
          value={trainningForm}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="faculty"
          name="faculty"
          value={faculty}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="disciplinesName"
          name="disciplinesName"
          value={disciplinesName}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="term"
          name="term"
          value={term}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="сourse"
          name="сourse"
          value={сourse}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="groupNumber"
          name="groupNumber"
          value={groupNumber}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="secondTeacher"
          name="secondTeacher"
          value={secondTeacher}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="lectionsNumb"
          name="lectionsNumb"
          value={lectionsNumb}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="labsNumb"
          name="labsNumb"
          value={labsNumb}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="consultaionsNumb"
          name="consultaionsNumb"
          value={consultaionsNumb}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="practicalNumb"
          name="practicalNumb"
          value={practicalNumb}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="ModularContNumb"
          name="ModularContNumb"
          value={ModularContNumb}
          onChange={e => onChange(e)}
        />
        <TextFieldGroup
          placeholder="ExamsNumb"
          name="ExamsNumb"
          value={ExamsNumb}
          onChange={e => onChange(e)}
        />
        <input type="submit" className="btn btn-info btn-block mt-4" />
      </form>
    </Fragment>
  )
}

AddPersonalTable.propTypes = {
  addTable: PropTypes.func.isRequired,
}

export default connect(null, { addTable })(AddPersonalTable);
