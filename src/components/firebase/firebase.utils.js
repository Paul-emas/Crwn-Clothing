import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCQetzGJ1vJLG0eFF99WF9Jir4vSrk_E9w",
  authDomain: "crown-db-343be.firebaseapp.com",
  projectId: "crown-db-343be",
  storageBucket: "crown-db-343be.appspot.com",
  messagingSenderId: "906218929664",
  appId: "1:906218929664:web:2b799135dad47fb47ba2e5",
  measurementId: "G-TN3EC3413P",
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
