import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAiiGtGFnEPHfDvXrPr24l7Lr9FVpmhN30",
  authDomain: "react-chat-app-9ea3b.firebaseapp.com",
  databaseURL: "https://react-chat-app-9ea3b.firebaseio.com",
  projectId: "react-chat-app-9ea3b",
  storageBucket: "react-chat-app-9ea3b.appspot.com",
  messagingSenderId: "338256383537"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
