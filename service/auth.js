// services/auth.js
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useNuxtApp } from 'nuxt/app';

export async function loginUser() {
  const { $auth } = useNuxtApp();
  try {
    const provider = new GoogleAuthProvider()
    const userCredential = await signInWithPopup($auth, provider)
    return {
      displayName: userCredential.user.displayName,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
      uid: userCredential.user.uid
    };
  } catch (error) {
    throw new Error(error.message);
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
