import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZ53ERbl7N4c3DiOLwzzWjdnRoU8Misyc",
    authDomain: "app-delivery-1b522.firebaseapp.com",
    databaseURL: "https://app-delivery-1b522-default-rtdb.firebaseio.com",
    projectId: "app-delivery-1b522",
    storageBucket: "app-delivery-1b522.appspot.com",
    messagingSenderId: "570877435801",
    appId: "1:570877435801:web:ea415c29efff727e0c3d08",
    measurementId: "G-MPRM4G6S3V"
  };

 export const appFire = initializeApp(firebaseConfig);


 // Initialize Cloud Firestore and get a reference to the service