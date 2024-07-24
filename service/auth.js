import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../database/firebase"


async function googleLogin() {
    try {
        const provider = new GoogleAuthProvider()
        const login = await signInWithPopup(auth, provider)
        return {
            displayName: login.user.displayName,
            email: login.user.email,
            photoURL: login.user.photoURL,
            uid: login.user.uid
        }
    } catch (error) {
        return error
    }
}

async function userLogout() {
    try {
        await signOut()
        return true
    } catch (error) {
        return error
    }
}

export { googleLogin, userLogout }