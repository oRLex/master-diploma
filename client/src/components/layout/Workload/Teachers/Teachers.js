import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Spinner from '../../Helpers/Spinner'

import { getProfiles } from '../../../../actions/profile'

class Teachers extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profile: { profiles, loading } } = this.props;
    let profileItems;

    if (loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <div className="card" key={profile._id}>
            <div className="card-body">
              <p>{profile.user.name}</p>
              <p>{profile.degree}</p>
              <p>{profile.telephone}</p>
              <p>{profile.social.email}</p>
              <p>{profile.social.facebook}</p>
              <img src={profile.user.avatar} alt="avatar" />
              <Link to={`/profile/${profile.user._id}`}>Докладніше</Link>
            </div>
          </div>
        ))
      } else {
        profileItems = <td>Profiles not found</td>
      }
    }
    return (
      <div>
        {profileItems}
      </div>
    )
  }
}

Teachers.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})
export default connect(mapStateToProps, { getProfiles })(Teachers);
