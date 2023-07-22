import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseApp = initializeApp({
	apiKey: "AIzaSyBj109A96F5mMed0tZf6AQac0lNL4kEzfQ",
	authDomain: "tennis-junction.firebaseapp.com",
	projectId: "tennis-junction",
	storageBucket: "tennis-junction.appspot.com",
	messagingSenderId: "254298341143",
  	appId: "1:254298341143:web:aafc651206be7d9a578152",
  	databaseURL: "https://tennis-junction.firebaseio.com",
  	measurementId: "G-RP0PTX6STJ"
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
