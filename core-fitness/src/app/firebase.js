
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKTn6vzgWe3Yy4MHSEJxkTI0-GbPpEEFE",
  authDomain: "core-fitness-78f07.firebaseapp.com",
  projectId: "core-fitness-78f07",
  appId: "1:567326572717:web:e557c7e397956191d1c624",
  storageBucket: "core-fitness-78f07.appspot.com", 
  messagingSenderId: "567326572717",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app)

export { auth };
