// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGkajv3mDCcUdkuIs6dIWM8JskMUSzWhA",
    authDomain: "auth-app-31a21.firebaseapp.com",
    projectId: "auth-app-31a21",
    storageBucket: "auth-app-31a21.appspot.com",
    messagingSenderId: "38043521756",
    appId: "1:38043521756:web:10a8a85fa0ca7a1ce8da19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)
export default app;