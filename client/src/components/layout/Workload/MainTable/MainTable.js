import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { getCurrentProfile } from '../../../../actions/profile'
import Spinner from '../../Helpers/Spinner'
import TableData from './TableData';
import Profiles from './Profiles'

class MainTable extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;
    let dashboardContent;

    if (loading && profile === null) {
      dashboardContent = <Spinner />;
    } else {
      dashboardContent = <Fragment>
        <h1>Hello</h1>
        <p>Welcome {user.name}</p>
        <img src={user.avatar} alt="" />
        <span><Link to="/addtable">Редагувати навантаження</Link></span>
        {/* <TableData experience={profile.personalTable} /> */}
        <Profiles />
      </Fragment>
    }
    return (
      <div>
        {dashboardContent}
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