import firebase from 'firebase/app';
import 'firebase/firestore';
import { getDatabase } from "firebase/database";
import { useFirebase } from "./firebaseLogic.js";
import { getStorage } from "firebase/storage";


console.log(process.cwd());

firebase.initializeApp({
	apiKey: "AIzaSyBj109A96F5mMed0tZf6AQac0lNL4kEzfQ",
	authDomain: "tennis-junction.firebaseapp.com",
	projectId: "tennis-junction",
	storageBucket: "tennis-junction.appspot.com",
	messagingSenderId: "254298341143",
	appId: "1:254298341143:web:aafc651206be7d9a578152",
	measurementId: "G-RP0PTX6STJ"
});

const db = firebase.database();

//const db = firebase.getFirestore();

var ref = firebase.database().ref();
var data;

function loadData() {
 return ref.once("value");
};

loadData().then((snapshot) => {
  data = snapshot.val();
  console.log(data);


  useFirebase(data);

});