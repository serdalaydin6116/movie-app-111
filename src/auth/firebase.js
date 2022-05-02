import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";







//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig ={
  apiKey: "AIzaSyD-T7J7dXJWvfq5Jh4ORzAhKomssxwNkAs",
  authDomain: "movie-app-111.firebaseapp.com",
  projectId: "movie-app-111",
  storageBucket: "movie-app-111.appspot.com",
  messagingSenderId: "116075209064",
  appId: "1:116075209064:web:9f755b81830cf99c16b6dd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);