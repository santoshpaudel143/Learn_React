import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPN0J22NjgdNBK38vNkuT1Xapq2pWz-cM",
  authDomain: "theboss-559e3.firebaseapp.com",
  databaseURL: "https://theboss-559e3.firebaseio.com",
  projectId: "theboss-559e3",
  storageBucket: "theboss-559e3.appspot.com",
  messagingSenderId: "559353482363",
  appId: "1:559353482363:web:97116e071d70eaed0126de",
  measurementId: "G-9NLYRDGQ3X"
});

const db = firebaseApp.firestore();

export default db;
