// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj109A96F5mMed0tZf6AQac0lNL4kEzfQ",
  authDomain: "tennis-junction.firebaseapp.com",
  projectId: "tennis-junction",
  storageBucket: "tennis-junction.appspot.com",
  messagingSenderId: "254298341143",
  appId: "1:254298341143:web:aafc651206be7d9a578152",
  measurementId: "G-RP0PTX6STJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);