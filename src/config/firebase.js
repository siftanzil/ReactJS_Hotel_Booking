// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
