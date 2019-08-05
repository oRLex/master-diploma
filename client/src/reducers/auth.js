import {
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  // we'have already made a request to he back-end and got a response. When we get the data/response then it will set to false
  // We know that it's been loaded
  loading: true,
  user: null
}

export default function (state = initialState, action) {
  const {
    type,
    payload
  } = action
  switch (type) {
    case REGISTER_SUCCESS:
      // localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
          loading: false
      }
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
            loading: false,
            user: payload
        }
        case LOGIN_SUCCESS:
          localStorage.setItem('token', payload.token)
          return {
            ...state,
            ...payload,
            isAuthenticated: true,
              loading: false
          }
          case AUTH_ERROR:
          case LOGIN_FAIL:
            // case REGISTER_FAIL:
          case LOGOUT:
            localStorage.removeItem('token')
            return {
              ...state,
              token: null,
                isAuthenticated: false,
                loading: false
            }
            default:
              return state
  }
}