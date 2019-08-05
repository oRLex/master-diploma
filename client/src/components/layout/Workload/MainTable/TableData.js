import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const TableData = ({ experience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.halfYear}</td>
      <td>{exp.trainningForm}</td>
      <td>{exp.faculty}</td>
      <td>{exp.disciplinesName}</td>
      <td>{exp.term}</td>
      <td>{exp.сourse}</td>
      <td>{exp.groupNumber}</td>
      <td>{exp.secondTeacher}</td>
      <td>{exp.lectionsNumb}</td>
      <td>{exp.labsNumb}</td>
      <td>{exp.consultaionsNumb}</td>
      <td>{exp.practicalNumb}</td>
      <td>{exp.ModularContNumb}</td>
      <td>{exp.ExamsNumb}</td>
    </tr>
  ))
  return (
    <Fragment>
      <table className="table">
        <thead>
          <tr>
            <th className="hide-sm">HalfYear</th>
            <th className="hide-sm">trainningForm</th>
            <th className="hide-sm">faculty</th>
            <th className="hide-sm">disciplinesName</th>
            <th className="hide-sm">term</th>
            <th className="hide-sm">сourse</th>
            <th className="hide-sm">groupNumber</th>
            <th className="hide-sm">secondTeacher</th>
            <th className="hide-sm">lectionsNumb</th>
            <th className="hide-sm">labsNumb</th>
            <th className="hide-sm">consultaionsNumb</th>
            <th className="hide-sm">practicalNumb</th>
            <th className="hide-sm">ModularContNumb</th>
            <th className="hide-sm">ExamsNumb</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {experiences}
        </tbody>
      </table>
    </Fragment>
  )
}

TableData.propTypes = {
  experience: PropTypes.array.isRequired,
}

export default TableData
