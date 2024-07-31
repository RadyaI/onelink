// plugins/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.public.firebaseKey,
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
    const storage = getStorage(app)

    // Inject into Nuxt app context
    nuxtApp.provide('db', db)
    nuxtApp.provide('auth', auth)
    nuxtApp.provide('storage', storage)
})
