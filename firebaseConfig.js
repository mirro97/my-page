// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDLtWIQGz8nwZxmdypHPrdHQjLQZ7Oz5M",
  authDomain: "ksj-frontend-dev.firebaseapp.com",
  projectId: "ksj-frontend-dev",
  storageBucket: "ksj-frontend-dev.appspot.com",
  messagingSenderId: "736148608668",
  appId: "1:736148608668:web:4f964f18532d14e15c3f59",
  measurementId: "G-YXJVWBL1QQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
