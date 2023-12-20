import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyASTKm61d4J91n95-PLfXYpRVAWa-vex6s",
    authDomain: "fir-a016e.firebaseapp.com",
    projectId: "fir-a016e",
    storageBucket: "fir-a016e.appspot.com",
    messagingSenderId: "889558870264",
    appId: "1:889558870264:web:be6e519c66de5fd2ae730d",
    measurementId: "G-V10G9XT7DV"
  };

export default firebase.initializeApp(firebaseConfig)