// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqH-bdlMXYkUMKWO_wTzZ8OF0A_0OFLYE",
  authDomain: "clone-ad3c4.firebaseapp.com",
  projectId: "clone-ad3c4",
  storageBucket: "clone-ad3c4.appspot.com",
  messagingSenderId: "941317159082",
  appId: "1:941317159082:web:66f5395adb971d401178d3",
  measurementId: "G-TP06PV3SH7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
