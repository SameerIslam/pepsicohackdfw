// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjvPtKg55tcGcfxCL3bPubg5ztElMnTjc",
  authDomain: "pepsico-backend.firebaseapp.com",
  projectId: "pepsico-backend",
  storageBucket: "pepsico-backend.appspot.com",
  messagingSenderId: "991247222112",
  appId: "1:991247222112:web:c0a8a8f1ed073ccb3c4a05",
  measurementId: "G-L84ZGHP7V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
