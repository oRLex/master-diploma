import axios from 'axios';
import {
  setAlert
} from './alert';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  GET_PROFILES,
} from './types'

// GET current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    })
  }
}

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  })
  try {
    const res = await axios.get('api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    })
  }
}




// Add personalTable
export const addTable = (formData, history) => dispatch => {
  // try {
  //   const config = {
  //     headers: {
  //       'Content=Type': 'application/json'
  //     }
  //   };
  //   const res = await axios.put('/api/profile/', formData, config);

  //   dispatch({
  //     type: UPDATE_PROFILE,
  //     payload: res.data
  //   });

  //   dispatch(setAlert('Experience Added', 'succes'));
  //   history.push('/workload')

  // } catch (err) {
  //   dispatch({
  //     type: PROFILE_ERROR,
  //     payload: err.response.data
  //   })
  // }
  axios
    .put('/api/profile/', formData)
    .then(res => history.push('/workload'))
    .catch(err =>
      dispatch({
        type: PROFILE_ERROR,
        payload: err.response.data
      })
    );
}

// Get profile by ID
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    })
  }
}








// Create or update prfile
// export const createProfile = (profileData, history) => dispatch => {
//   axios
//     .post('/api/profile', profileData)
//     .then(res => history.push('/workload'))
//     .catch(err =>
//       dispatch({
//         type: PROFILE_ERROR,
//         payload: err.response.data
//       })
//     );
// };