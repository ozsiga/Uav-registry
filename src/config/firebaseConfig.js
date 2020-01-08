import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCa_zffXXB5Vuzs62LyOcGZiWHpaNkok9o",
  authDomain: "uav-registry.firebaseapp.com",
  databaseURL: "https://uav-registry.firebaseio.com",
  projectId: "uav-registry",
  storageBucket: "uav-registry.appspot.com",
  messagingSenderId: "1074794904204",
  appId: "1:1074794904204:web:aa24a2cd7d52953fe459a9",
  measurementId: "G-KYPZ3HN7PF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
