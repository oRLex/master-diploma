import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';


import { getCurrentProfile } from '../../../../actions/profile'
import Profiles from './Profiles'

class MainTable extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Profiles />
      </div>
    )
  }
}

MainTable.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(MainTable);