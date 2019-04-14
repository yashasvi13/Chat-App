import authReducer from "./authReducers";
import chatReducer from "./chatReducers";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
export default rootReducer;
