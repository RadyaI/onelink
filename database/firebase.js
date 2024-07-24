// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "onelink-8da0d.firebaseapp.com",
    projectId: "onelink-8da0d",
    storageBucket: "onelink-8da0d.appspot.com",
    messagingSenderId: "371385607379",
    appId: "1:371385607379:web:29657fe2a110c570486026",
    measurementId: "G-B2PM6E3HHC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }