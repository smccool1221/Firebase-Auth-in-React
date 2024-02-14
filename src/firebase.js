// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYslHrWXqN09dSkIXMKaPNemsYU558k8o",
  authDomain: "auth-8c7b8.firebaseapp.com",
  projectId: "auth-8c7b8",
  storageBucket: "auth-8c7b8.appspot.com",
  messagingSenderId: "248337021527",
  appId: "1:248337021527:web:9a71cb9499214e250a4112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);