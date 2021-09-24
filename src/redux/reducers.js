import * as actionTypes from './actionTypes';
import { combineReducers } from "redux";

const usersList = (state = [], action)  => {
  switch(action.type) {
    case actionTypes.USERS_LIST:
      return action.payload;
    default: return state;
  }
}

const rootReducer = combineReducers({
  usersList
});

export default rootReducer;