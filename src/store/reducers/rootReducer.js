import authReducer from "./authReducers";
import chatReducer from "./chatReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducer({
  auth: authReducer,
  chat: chatReducer
});
export default rootReducer;
