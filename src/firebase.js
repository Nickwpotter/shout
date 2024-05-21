import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2efwm8mCxqz22cZIdl0ta1OOzRx64I2g",
  authDomain: "shout-b6d30.firebaseapp.com",
  projectId: "shout-b6d30",
  storageBucket: "shout-b6d30.appspot.com",
  messagingSenderId: "1000075306721",
  appId: "1:1000075306721:web:dbf101f4ce6cb9447639a0",
  measurementId: "G-FN8908EZ1F"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
