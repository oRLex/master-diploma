import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getProfileByHandle } from '../../../../actions/profile'
import Spinner from '../../Helpers/Spinner'
import ProfileAbout from './ProfileAbout'

import TableData from './TableData';

class MyProfile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }
  render() {
    const { profile, loading } = this.props.profile;

    return (
      <Fragment>
        {profile === null || loading
          ? <Spinner />
          : <Fragment>
            <Link to="/workload/teachers">Back to Teachers</Link>

            <div>
              <ProfileAbout profile={profile} />
            </div>
          </Fragment>}
      </Fragment>
    );
  }
}

MyProfile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfileByHandle })(MyProfile);