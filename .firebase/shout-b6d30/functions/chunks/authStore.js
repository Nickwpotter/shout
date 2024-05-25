import { w as writable } from "./index.js";
import { a as auth, d as db } from "./firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const authStore = writable({
  isLoading: true,
  currentUser: null,
  userData: null,
  userRef: null,
  userType: null
});
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log("user", user);
    let userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const userData = userDoc.data();
      authStore.set({ isLoading: false, currentUser: user, userData, userRef: userDocRef, userType: userData.type ? userData.type : null });
    } else {
      authStore.set({ isLoading: false, currentUser: user });
    }
  } else {
    authStore.set({ isLoading: false, currentUser: null, userData: null });
  }
});
export {
  authStore as a
};
