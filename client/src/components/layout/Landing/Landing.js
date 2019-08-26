import React from 'react';
import { Redirect } from 'react-router-dom';
import './Landing.css';
import Login from '../../auth/Login';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Landing = ({ isAuthenticated }) => {
  // if (isAuthenticated) {
  //   return <Redirect to='/workload' />
  // }
  return (
    <div>
      <div className="landing">
        <Login />
        <div className="right-bg"></div>
      </div>
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
