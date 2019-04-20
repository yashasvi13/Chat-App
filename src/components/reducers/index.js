import * as actionTypes from "../actions/types";
import { combineReducers } from "redux";
const initState = {
  currentUser: null
};
const user_reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.payload.currentUser
      };
    case actionTypes.CLEAR_USER:
      return {
        ...initState
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: user_reducer
});

export default rootReducer;
