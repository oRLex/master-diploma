import React, { Component, Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Landing from './components/layout/Landing/Landing'
import Alert from './components/layout/Helpers/Alert'


import PrivateRouter from './components/routing/PrivateRouter';
import MainTable from './components/layout/Workload/MainTable/MainTable';
import Spinner from './components/layout/Helpers/Spinner';
import SingleTeacher from './components/layout/Workload/SingleTeacher/SingleTeacher';
import CreateUser from './components/layout/Workload/AddTeacher/CreateUser';
import AddPersonalTable from './components/layout/Workload/AddPersonalTable/AddPersonalTable';
import Teachers from './components/layout/Workload/Teachers/Teachers';
import MyProfile from './components/layout/Workload/MyProfile/MyProfile';
import Navbar from './components/layout/Navbar/Navbar';
import SideDrawer from './components/layout/SideDrawer/SideDrawer';
import Backdrop from './components/layout/Helpers/Backdrop';


const loading = () => <Spinner />

// Containers
const DefaultLayout = React.lazy(() => import('./components/layout/Workload/MainTable/MainTable'));
const SingleTeacherLazy = React.lazy(() => import('./components/layout/Workload/SingleTeacher/SingleTeacher'));
const CreateUserLazy = React.lazy(() => import('./components/layout/Workload/AddTeacher/CreateUser'));
const AddPersonalTableLazy = React.lazy(() => import('./components/layout/Workload/AddPersonalTable/AddPersonalTable'));
const TeachersLazy = React.lazy(() => import('./components/layout/Workload/Teachers/Teachers'));
const MyProfileLazy = React.lazy(() => import('./components/layout/Workload/MyProfile/MyProfile'));

class App extends Component {
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
        <Fragment>
          <Switch>
            <Route exact path="/" name="Login Page" render={props => <Landing {...props} />} />
            <Suspense fallback={loading()}>
              <div style={{ height: '100%' }}>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                {/* {sideDrawer}*/}
                <SideDrawer show={this.state.sideDrawerOpen} close={this.drawerToggleClickHandler} />
                {blackdrop}
                <PrivateRouter exact path="/workload" component={DefaultLayout} />
                <PrivateRouter path="/workload/singleteacher" component={SingleTeacherLazy} />
                <PrivateRouter path="/workload/addteacher" component={CreateUserLazy} />
                <PrivateRouter path="/workload/addTable" component={AddPersonalTableLazy} />
                <PrivateRouter path="/workload/teachers" component={TeachersLazy} />
                <PrivateRouter path="/workload/profile/:id" component={MyProfileLazy} />
              </div>
            </Suspense>
          </Switch>
        </Fragment>
      </Router>
    )
  }
};

export default App;
