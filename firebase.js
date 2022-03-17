// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC_tsK1G0JAukSEGudct5dkr2tFnuVnM7s",
//   authDomain: "whatsapp-2-6bc29.firebaseapp.com",
//   projectId: "whatsapp-2-6bc29",
//   storageBucket: "whatsapp-2-6bc29.appspot.com",
//   messagingSenderId: "553565792558",
//   appId: "1:553565792558:web:8b73c7a07a3d0c1b0732bf",
//   measurementId: "G-FSDC8G24WW",
// };

// const app = !firebase.app.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore();
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_tsK1G0JAukSEGudct5dkr2tFnuVnM7s",
  authDomain: "whatsapp-2-6bc29.firebaseapp.com",
  projectId: "whatsapp-2-6bc29",
  storageBucket: "whatsapp-2-6bc29.appspot.com",
  messagingSenderId: "553565792558",
  appId: "1:553565792558:web:8b73c7a07a3d0c1b0732bf",
  measurementId: "G-FSDC8G24WW",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, db, provider };
