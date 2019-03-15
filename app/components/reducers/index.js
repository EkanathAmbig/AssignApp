import { combineReducers } from 'redux';
import {EMP_DATA} from '../actions/types.js'

const INITIAL_STATE = {
  employeelist: [],
}

const details = (  state= INITIAL_STATE, action) => {
  switch (action.type) {
    case EMP_DATA:
      return { ...state,employeelist: action.payload}
      break;
    default:
      return state;
  }
}

export default combineReducers ({
	details
});
