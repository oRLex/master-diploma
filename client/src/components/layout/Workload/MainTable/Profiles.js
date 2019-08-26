import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../../Helpers/Spinner'
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../../../actions/profile'
import { addTable } from '../../../../actions/profile'
import './Profiles.css'

class Profiles extends Component {

  componentDidMount() {
    this.props.getProfiles();
  }



  onSubmit(e) {
    e.preventDefault();

    console.log(this.state.values)
    const profileData = this.state.values;

    this.props.addTable(profileData, this.props.history);
  }
  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems =
          <Fragment>
            {/* FLEX VERSION */}
            <h1 className="prime-text">All Profiles</h1>
            <div className="table">
              <div className="heading">
                <div className="heading-item">Name</div>
                <div className="heading-item">HalfYear</div>
                <div className="heading-item">trainningForm</div>
                <div className="heading-item">faculty</div>
                <div className="heading-item">disciplinesName</div>
                <div className="heading-item">term</div>
                <div className="heading-item">сourse</div>
                <div className="heading-item">groupNumber</div>
                <div className="heading-item">secondTeacher</div>
                <div className="heading-item">lectionsNumb</div>
                <div className="heading-item">labsNumb</div>
                <div className="heading-item">consultaionsNumb</div>
                <div className="heading-item">practicalNumb</div>
                <div className="heading-item">ModularContNumb</div>
                <div className="heading-item">ExamsNumb</div>
              </div>
              <div className="table-body">
                {profileItems = profiles.map(profile => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))}
              </div>
            </div>
          </Fragment >
      } else {
        profileItems = <span>Profiles not found</span>
      }
    }
    // if (profiles.length > 0) {
    //   // profileItems = profiles.map(profile => (
    //   //   <ProfileItem key={profile._id} profile={profile} />
    //   // ));
    return (
      <Fragment>
        {profileItems}
      </Fragment>


    )
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  addTable: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles, addTable })(Profiles);