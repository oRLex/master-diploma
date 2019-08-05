import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Teachers from './Teachers/Teachers';
import PrivateRouter from '../../../components/routing/PrivateRouter';
import SingleTeacher from './SingleTeacher/SingleTeacher';
import Navbar from '../Navbar/Navbar';
import { connect } from 'react-redux'
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Helpers/Backdrop';
import PropTypes from 'prop-types'
import MainTable from './MainTable/MainTable'

// import { getCurrentProfile } from '../../../actions/profile'
// import Spinner from '../Helpers/Spinner'

import './Workload.css'

// Redux
import { Provider } from 'react-redux';
import store from '../.././../store';
import CreateUser from './AddTeacher/CreateUser';
import AddPersonalTable from './AddPersonalTable/AddPersonalTable';
import profile from '../../../reducers/profile';


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

  render() {




    // let sideDrawer
    let blackdrop

    if (this.state.sideDrawerOpen) {
      blackdrop = <Backdrop click={this.backdropClickHandler} />
    }



    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          {/* {sideDrawer}*/}
          <SideDrawer show={this.state.sideDrawerOpen} close={this.drawerToggleClickHandler} />
          {blackdrop}
        </div>
        <Switch>
          <PrivateRouter exact path="/workload" component={MainTable} />
          <PrivateRouter exact path="/singleteacher" component={SingleTeacher} />
          <PrivateRouter exact path="/addteacher" component={CreateUser} />
          <PrivateRouter exact path="/addTable" component={AddPersonalTable} />
        </Switch>
      </Router>

    )
  }
}


export default Workload;
