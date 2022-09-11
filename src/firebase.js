// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwj9TUHN9wHrZstluREjLO9NyXdxLYzng",
  authDomain: "chat-app-42413.firebaseapp.com",
  projectId: "chat-app-42413",
  storageBucket: "chat-app-42413.appspot.com",
  messagingSenderId: "617587852566",
  appId: "1:617587852566:web:33d8e060db739d04ef7c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);