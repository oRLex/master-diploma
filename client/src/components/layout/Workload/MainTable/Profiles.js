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
                <div className="heading-item" style={{ "width": "7%" }}>Name</div>
                <div className="heading-item">Назва дисципліни</div>
                <div className="heading-item">Півріччя</div>
                <div className="heading-item">Форма навчання</div>
                <div className="heading-item">Факультет</div>
                <div className="heading-item">К-сть студентів</div>
                <div className="heading-item">Номер групи</div>
                <div className="heading-item">Курс</div>
                <div className="heading-item">Викладач2</div>
                <div className="heading-item">Лекції</div>
                <div className="heading-item">Лабораторні</div>
                <div className="heading-item">Консультації</div>
                <div className="heading-item">Практичні</div>
                <div className="heading-item">Модуль</div>
                <div className="heading-item">Екзамен</div>
                <div className="heading-item">Всього</div>
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