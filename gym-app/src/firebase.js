// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// For Firebase v9 (modular syntax)

const firebaseConfig = {
  apiKey: "AIzaSyCQKy863t_1ETkjoZVYj5k6k_78YLkKtRU",
  authDomain: "swiggggyyy.firebaseapp.com",
  projectId: "swiggggyyy",
  storageBucket: "swiggggyyy.appspot.com",
  messagingSenderId: "989825716656",
  appId: "1:989825716656:web:4c721522e37435cf5a4675",
  measurementId: "G-YJ3J9XZQXC",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
