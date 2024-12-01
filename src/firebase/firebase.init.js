// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIX8o3J1kPbNBEud4ntbnREbUXwCe-TMU",
  authDomain: "coffee-store-22f4e.firebaseapp.com",
  projectId: "coffee-store-22f4e",
  storageBucket: "coffee-store-22f4e.firebasestorage.app",
  messagingSenderId: "873927791808",
  appId: "1:873927791808:web:f1774ee88efe0790a00925"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;