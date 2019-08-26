import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCbz3tGSgNbiDjVMHxNaBYAH2xGH-VNah8",
    authDomain: "dreamboard-6f6a9.firebaseapp.com",
    databaseURL: "https://dreamboard-6f6a9.firebaseio.com",
    projectId: "dreamboard-6f6a9",
    storageBucket: "",
    messagingSenderId: "60819884262",
    appId: "1:60819884262:web:1e72bcc7cc545857"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);


  export default firebase;