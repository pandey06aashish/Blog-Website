// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-website-63010.firebaseapp.com",
  projectId: "blog-website-63010",
  storageBucket: "blog-website-63010.appspot.com",
  messagingSenderId: "471360344284",
  appId: "1:471360344284:web:b13a77a251501628e0a419"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);