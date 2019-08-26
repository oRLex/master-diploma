import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/auth';
import jwt_decode from 'jwt-decode';
import { clearCurrentProfile } from './actions/profile';
import setAuthToken from './utils/setAuthToken'
import App from './App';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/';
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
