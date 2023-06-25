import "firebase/app";
import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNyL01xg-aQXYvFecmTS5BiKTZJi6Q0Sk",

  authDomain: "healthify-1f3a9.firebaseapp.com",

  projectId: "healthify-1f3a9",

  storageBucket: "healthify-1f3a9.appspot.com",

  messagingSenderId: "209398394645",

  appId: "1:209398394645:web:e303d8d2510a71624e431c",

  measurementId: "G-BJW4X3KQN0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const gProvider = new GoogleAuthProvider();
const fProvider = new FacebookAuthProvider();

export { auth, db, storage, gProvider, fProvider };
