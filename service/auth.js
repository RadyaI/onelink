// services/auth.js
import { addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useNuxtApp } from 'nuxt/app';

export async function loginUser() {
  const { $db, $auth } = useNuxtApp();
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup($auth, provider)
    const userData = {
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
      uid: userCredential.user.uid
    }

    const checkNewUser = await getDocs(query(collection($db, 'users'), where('uid', '==', userData.uid)))
    if (checkNewUser.empty) {
      await addDoc(collection($db, 'users'), userData)
    }

    return userData;
  } catch (error) {
    throw new Error(error);
  }
};

export async function logoutUser() {
  try {
    const { $auth } = useNuxtApp
    await signOut($auth)
    return true
  } catch (error) {
    return error.message
  }
}
