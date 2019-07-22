import React, { Component, useEffect } from 'react';
import Teachers from './Teachers/Teachers';
import SingleTeacher from './SingleTeacher/SingleTeacher';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Helpers/Backdrop';
import PropTypes from 'prop-types'

import { getCurrentProfile } from '../../../actions/profile'


import './Workload.css'

// Redux
import { Provider } from 'react-redux';
import store from '../.././../store';


class Workload extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  // componentDidMount()
  render() {
    const { profile } = this.props
    // let sideDrawer
    let blackdrop

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />
      blackdrop = <Backdrop click={this.backdropClickHandler} />
    }


    return (
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        {/* {sideDrawer}*/}
        <SideDrawer show={this.state.sideDrawerOpen} />
        {blackdrop}
        <Teachers />
        <SingleTeacher />
      </div>

    )
  }
}

Workload.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Workload)
