// import axios from 'axios';
// import {
//   setAlert
// } from './alert'
// import {
//   LOGIN_SUCCESS,
//   REGISTER_FAIL,
//   REGISTER_SUCCESS,
//   LOGIN_FAIL,
//   USER_LOADED,
//   AUTH_ERROR,
//   LOGOUT,
//   CLEAR_PROFILE,
//   PROFILE_ERROR,
//   GET_PROFILE
// } from './types';
// import setAuthToken from '../utils/setAuthToken'

import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import {
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// // Register User
// export const register = (userData, profileData, history) => dispatch => {
//   const res = axios.post('/api/users', userData)
//   dispatch({
//       type: REGISTER_SUCCESS,
//       payload: res.data
//     })
//     .then(data => {
//       axios.post('/api/profile', profileData)
//       dispatch({
//           type: GET_PROFILE,
//           payload: data
//         })
//         .catch(err =>
//           dispatch({
//             type: PROFILE_ERROR,
//             payload: err.response.data
//           })
//         )
//     })
//     .catch(err =>
//       dispatch({
//         type: REGISTER_FAIL,
//         payload: err.response.data
//       })
//     );
// };

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// // Load User
// export const loadUser = () => async dispatch => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token)
//   }

//   try {
//     const res = await axios.get('/api/auth');

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//     })
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     })
//   }
// }


// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      const {
        token
      } = res.data;
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// //  Logout 
// export const logout = () => dispatch => {
//   dispatch({
//     type: CLEAR_PROFILE
//   })
//   dispatch({
//     type: LOGOUT
//   })

// }
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};