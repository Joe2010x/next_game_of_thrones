// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_7eZzJKvddeFrAP2S_jg-4eDqRUxWscA",
  authDomain: "movie--coments.firebaseapp.com",
  projectId: "movie--coments",
  storageBucket: "movie--coments.appspot.com",
  messagingSenderId: "92054303864",
  appId: "1:92054303864:web:ebd4075d54860a0cd2298d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const authentication = getAuth(app);