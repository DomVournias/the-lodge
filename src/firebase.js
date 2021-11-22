import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7HtqV7lgKyKT8wmd2lPMXh1Vg_-LyYKQ",
  authDomain: "the-lodge-2bace.firebaseapp.com",
  projectId: "the-lodge-2bace",
  storageBucket: "the-lodge-2bace.appspot.com",
  messagingSenderId: "364261446961",
  appId: "1:364261446961:web:58e132d5f15362cb460c10",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
