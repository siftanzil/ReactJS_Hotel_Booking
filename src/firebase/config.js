import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "sif-react-hotel.firebaseapp.com",
   projectId: "sif-react-hotel",
   storageBucket: "sif-react-hotel.appspot.com",
   messagingSenderId: "1077102071355",
   appId: "1:1077102071355:web:936bcdc17120bdd49b161e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
