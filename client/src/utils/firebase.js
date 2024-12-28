// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-44346.firebaseapp.com",
  projectId: "taskmanager-44346",
  storageBucket: "taskmanager-44346.firebasestorage.app",
  messagingSenderId: "168527828467",
  appId: "1:168527828467:web:56adb77994a2ab0de6ae86",
  measurementId: "G-6J1QXVLSKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);