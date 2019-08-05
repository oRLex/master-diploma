import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div></div>
    )
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
