// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPuDiMj600-uVYEl3EL6G245JuPxnOEIw",
  authDomain: "hackathon-67c75.firebaseapp.com",
  projectId: "hackathon-67c75",
  storageBucket: "hackathon-67c75.appspot.com",
  messagingSenderId: "985237759368",
  appId: "1:985237759368:web:4d00ae35efcfbc4aa8063d",
  measurementId: "G-0W0ZR7V1N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('login-btn').addEventListener('click', function () {
  // Just show the buttons without checking credentials
  document.getElementById('login-section').classList.add('hidden');
  document.getElementById('portal-buttons').classList.remove('hidden');
});