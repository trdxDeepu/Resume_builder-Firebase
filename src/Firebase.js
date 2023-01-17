import { initializeApp } from "firebase/app";
import {getFirestore}  from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCwSxKzLSBc20OTw63I3bN6RewWWS6MbCc",
  authDomain: "resume-builder-caf5d.firebaseapp.com",
  projectId: "resume-builder-caf5d",
  storageBucket: "resume-builder-caf5d.appspot.com",
  messagingSenderId: "850423362565",
  appId: "1:850423362565:web:2a0f5c0a40761e58cb986c"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore() ;




