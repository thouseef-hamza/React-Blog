// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPkcXXc5WOUyS4Sp6JjBx5BgH8fgM4Lzs",
  authDomain: "blog-project-3aa15.firebaseapp.com",
  projectId: "blog-project-3aa15",
  storageBucket: "blog-project-3aa15.appspot.com",
  messagingSenderId: "223591108623",
  appId: "1:223591108623:web:f8533600bc38ede7db537a",
  measurementId: "G-FJB5K0WB5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();