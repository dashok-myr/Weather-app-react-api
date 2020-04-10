const firebase = require('firebase');
require('dotenv').config();

const {API_KEY, MESS_SENDER_ID, FIREBASE_DB_URL} = process.env;


var firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "weather-app-ed543.firebaseapp.com",
    databaseURL: FIREBASE_DB_URL,
    projectId: "weather-app-ed543",
    storageBucket: "weather-app-ed543.appspot.com",
    messagingSenderId: MESS_SENDER_ID,
    appId: "1:116817621727:web:354981e1080a0503c7ef6a",
    measurementId: "G-ZGZ51NVW8Z"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  
   const db = firebase.firestore();
 
   module.exports = db;