import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCEdgkKFby-zOLYUVWsYFpeDwZ54C0njOs",
  authDomain: "chat-app-31082.firebaseapp.com",
  databaseURL: "https://chat-app-31082.firebaseio.com",
  projectId: "chat-app-31082",
  storageBucket: "chat-app-31082.appspot.com",
  messagingSenderId: "327272794062"
};
firebase.initializeApp(config);

export default firebase;
