import { writable } from 'svelte/store';
import {auth, db} from '../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateEmail, updatePassword, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";

export const authStore = writable({
    isLoading: true,
    currentUser: null,
    userData: null,
    userRef: null,
    userType: null
});


onAuthStateChanged(auth, async (user) => {
    if (user) { // Only attempt to fetch userDoc if user is logged in
        console.log('user', user);
        let userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            authStore.set({ isLoading: false, currentUser: user, userData: userData, userRef: userDocRef, userType: userData.type ? userData.type : null }); // Get data from the document
        } else {
            authStore.set({ isLoading: false, currentUser: user });
        }
    } else {
        authStore.set({ isLoading: false, currentUser: null, userData: null }); // Set userDoc to null when user is not logged in
    }
});

export const authHandlers = {
    signup: async (email, password) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        authStore.set({ isLoading: false, currentUser: user });
    },
    login: async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        authStore.set({ isLoading: false, currentUser: user });
    },
    logout: async () => {
        await signOut(auth)
    },
    resetPassword: async(email) => {
        await sendPasswordResetEmail(auth, email)
    },
    updateEmail: async(email) => {
        await updateEmail(auth, email)
    },
    updatePassword: async (password) => {
        await updatePassword(auth, password)
    }
}
