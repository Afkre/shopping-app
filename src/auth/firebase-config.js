// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVHOGhB_P0ebbCBghpJtP01kYT5vd5j6M",
    authDomain: "shopping-app-3d061.firebaseapp.com",
    projectId: "shopping-app-3d061",
    storageBucket: "shopping-app-3d061.appspot.com",
    messagingSenderId: "528113692604",
    appId: "1:528113692604:web:f7bca6d7da888203dfc5b9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }; 
