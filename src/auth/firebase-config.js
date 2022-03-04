// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuVJDZTHli3s2HVoHvdacsC-J-ATnrIJ4",
  authDomain: "react-shopping-app-2bcd1.firebaseapp.com",
  projectId: "react-shopping-app-2bcd1",
  storageBucket: "react-shopping-app-2bcd1.appspot.com",
  messagingSenderId: "346930125602",
  appId: "1:346930125602:web:fc57564dc5d47f0405e37b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }; 
