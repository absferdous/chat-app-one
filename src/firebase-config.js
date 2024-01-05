// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHqQyaSBeJEyKvY0LsStiyA52Ob5js7G0",
  authDomain: "chatappone-2e765.firebaseapp.com",
  projectId: "chatappone-2e765",
  storageBucket: "chatappone-2e765.appspot.com",
  messagingSenderId: "254725038123",
  appId: "1:254725038123:web:f0c4fe21a44c778d8d4a6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = new getFirestore(app);
