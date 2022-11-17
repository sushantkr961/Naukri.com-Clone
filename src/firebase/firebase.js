// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw0I6QkoKUjTWzFpcAm9_kHqpaatbvXN4",
  authDomain: "react-authentication-13dc7.firebaseapp.com",
  projectId: "react-authentication-13dc7",
  storageBucket: "react-authentication-13dc7.appspot.com",
  messagingSenderId: "461899034605",
  appId: "1:461899034605:web:257e7d988fd1ecd52d41e4",
  measurementId: "G-FPFPMFGH1W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
const analytics = getAnalytics(app);
