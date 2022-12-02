import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAwUBixbcEg9qlu7jlZFR4a44fJKwz9dlQ",
    authDomain: "mercury-7fb43.firebaseapp.com",
    projectId: "mercury-7fb43",
    storageBucket: "mercury-7fb43.appspot.com",
    messagingSenderId: "1007515505998",
    appId: "1:1007515505998:web:7a059fa2794fd6d4defa1f",
    measurementId: "G-45D5YYD7GS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize firestore
const db = getFirestore(app);

// initialize authentication
const provider = new GoogleAuthProvider();

export { db, provider }