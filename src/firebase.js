import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA2_yW0Ig69xnLPbY_ep3F_9iW3M73xwOU",
    authDomain: "fir-8a856.firebaseapp.com",
    projectId: "fir-8a856",
    storageBucket: "fir-8a856.appspot.com",
    messagingSenderId: "49474210948",
    appId: "1:49474210948:web:896127a30d62da675846d1",
    measurementId: "G-70BBG5SGL9"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };