// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBAvXQpAM-_XCHU_RIzZVWEw4CXtn4kyDA",
  authDomain: "mystery-of-antiques-bg.firebaseapp.com",
  projectId: "mystery-of-antiques-bg",
  storageBucket: "mystery-of-antiques-bg.appspot.com",
  messagingSenderId: "1057764106695",
  appId: "1:1057764106695:web:e8ce1a4bd6d907ad1779e2",
  measurementId: "G-3BXG6DXH55",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
const db = getFirestore(app);
export { db, functions };
