import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLxj50iOupk3a7PFJJPg0R4ndyvbBfB9Q",
  authDomain: "docs-app-1c4df.firebaseapp.com",
  projectId: "docs-app-1c4df",
  storageBucket: "docs-app-1c4df.appspot.com",
  messagingSenderId: "492062514837",
  appId: "1:492062514837:web:501669da9c1e2236d7c59c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
