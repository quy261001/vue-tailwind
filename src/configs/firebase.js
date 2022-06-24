import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Q-cjxZJs1pSRrkpwTccsYjWTMSooJ20",
  authDomain: "money-3c06d.firebaseapp.com",
  projectId: "money-3c06d",
  storageBucket: "money-3c06d.appspot.com",
  messagingSenderId: "39062206882",
  appId: "1:39062206882:web:97409b1cc7e532f4815afb",
  measurementId: "G-8ERXK8XXFY"
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.fiedValue.serverTimestamp;

export{projectAuth, projectFirestore, timestamp}