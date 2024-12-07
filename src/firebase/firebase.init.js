// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbycucVkwEgz3T-x1M4QM54ITk-7jzHSk",
  authDomain: "coffee-store-fe305.firebaseapp.com",
  projectId: "coffee-store-fe305",
  storageBucket: "coffee-store-fe305.firebasestorage.app",
  messagingSenderId: "878151946411",
  appId: "1:878151946411:web:00a13028aade72197467ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
