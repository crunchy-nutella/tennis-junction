import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBj109A96F5mMed0tZf6AQac0lNL4kEzfQ",
	authDomain: "tennis-junction.firebaseapp.com",
	projectId: "tennis-junction",
	storageBucket: "tennis-junction.appspot.com",
	messagingSenderId: "254298341143",
	appId: "1:254298341143:web:aafc651206be7d9a578152",
	measurementId: "G-RP0PTX6STJ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export default { app, database, analytics };