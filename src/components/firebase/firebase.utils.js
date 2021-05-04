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

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
