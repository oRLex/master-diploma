import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TableData from './TableData';

const ProfileAbout = ({ profile: {
  degree,
  telephone,
  social,
  user: { name, avatar },
  personalTable
} }) => {
  return (
    <div>
      <img src={avatar} alt="avatar" />
      <h3>{name}</h3>
      <h4>{degree}</h4>
      <p>{telephone}</p>
      {
        social && social.facebook && (
          <a href={social.facebook} rel="noopener noreferrer">Facebook</a>
        )
      }{" "}
      {
        social && social.email && (
          <a href={social.email} rel="noopener noreferrer">{social.email}</a>
        )
      }
      <h4>Навантаження</h4>
      {personalTable.length > 0 ? (
        <Fragment>
          <TableData key={personalTable._id} experience={personalTable} />
        </Fragment>
      )
        : (<h4>Відсутнє навантаження </h4>)}
    </div>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
}

export default ProfileAbout
