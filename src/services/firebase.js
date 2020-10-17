import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB3RFizD7q_v2ItD89sQs02t7kK3YEfWF0",
  authDomain: "goduti-id.firebaseapp.com",
  databaseURL: "https://goduti-id.firebaseio.com",
  projectId: "goduti-id",
  storageBucket: "goduti-id.appspot.com",
  messagingSenderId: "686321226367",
  appId: "1:686321226367:web:22a9dfcbac9aa02848654a",
});

export default app;
