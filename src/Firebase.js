import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCvs5EJ3nrg4O_GTfUgP3P4yUwFQYWF0Hs",
  authDomain: "clone-c48ca.firebaseapp.com",
  projectId: "clone-c48ca",
  storageBucket: "clone-c48ca.appspot.com",
  messagingSenderId: "901127060972",
  appId: "1:901127060972:web:adca05b8a95d678c0554c9",
  measurementId: "G-VQ4V3WPPW0"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { db, auth };