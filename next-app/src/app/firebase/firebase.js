// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-vXuSsLbUFMAOhYu3hme-no_4MGG_Rgc",
  authDomain: "shambala-f6316.firebaseapp.com",
  projectId: "shambala-f6316",
  storageBucket: "shambala-f6316.appspot.com",
  messagingSenderId: "951057061570",
  appId: "1:951057061570:web:0369c10624e6f6607f4d5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);