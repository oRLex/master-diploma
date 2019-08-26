import React, { Component } from 'react';
import { getCurrentProfile } from '../../../../actions/profile'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class SingleTeacher extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    return (
      <div>
        <span>SingleTeacher</span>
      </div>
    );
  }
}

SingleTeacher.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(SingleTeacher)