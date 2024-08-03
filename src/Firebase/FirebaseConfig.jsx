// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKR2jynRRLmHupgEn7BIlpH-LJcgBFgSw",
  authDomain: "r-auth-2.firebaseapp.com",
  projectId: "r-auth-2",
  storageBucket: "r-auth-2.appspot.com",
  messagingSenderId: "435288311522",
  appId: "1:435288311522:web:d685ddcda589d3216300bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)

