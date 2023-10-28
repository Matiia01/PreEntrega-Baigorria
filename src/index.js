import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'font-awesome/css/font-awesome.min.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpeAllorB6WQ2zu9uX-79JrXPAHwBdBp8",
  authDomain: "fireshop-f4ca7.firebaseapp.com",
  projectId: "fireshop-f4ca7",
  storageBucket: "fireshop-f4ca7.appspot.com",
  messagingSenderId: "929722532018",
  appId: "1:929722532018:web:7e0555814ad8a086a789ab",
  measurementId: "G-TX8BPE1JF9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
