import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../../Helpers/Spinner'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../../../actions/profile'

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (loading && profiles === null) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <Fragment>
        <h1 className="large text-primary">All Profiles</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="hide-sm">Name</th>
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
            {profileItems}
          </tbody>
        </table>


      </Fragment >
    )
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);