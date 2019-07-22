import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing/Landing'
import Alert from './components/layout/Helpers/Alert'
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Workload from './components/layout/Workload/Workload';
import PrivateRouter from './components/routing/PrivateRouter';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRouter exact path="/workload" component={Workload} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  )
};

export default App;
