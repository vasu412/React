// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7O7AmpgV8WvwJUAIzPHnkrVhcVYP79KM",
  authDomain: "drive-2844d.firebaseapp.com",
  databaseURL: "https://drive-2844d-default-rtdb.firebaseio.com",
  projectId: "drive-2844d",
  storageBucket: "drive-2844d.appspot.com",
  messagingSenderId: "54482653167",
  appId: "1:54482653167:web:714e1e7fbd9c7772fdb01a",
  measurementId: "G-LHRHKD6SCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
