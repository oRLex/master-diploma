import {
  SET_ALERT,
  REMOVE_ALERT
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  const {
    type,
    payload
  } = action;
  switch (type) {
    case SET_ALERT:
      //add state to initialState
      return [...state, payload];
    case REMOVE_ALERT:
      // payload is just an ID
      return state.filter(alert => alert.id !== payload);

    default:
      return state;
  }

}