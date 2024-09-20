import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, addDoc, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
const auth = getAuth();
const db = getFirestore();


let course = document.getElementById("course");
let studentId = document.getElementById("studentId");
let marks = document.getElementById("marks");
let totalMarks = document.getElementById("totalMarks");
let grade = document.getElementById("grade");


window.UploadStudent = () => {
    let obj = {
        course:course.value,
        studentId:studentId.value,
        marks:marks.value,
        totalMarks:totalMarks.value,
        grade:grade.value,
    }
    console.log(obj);

    const reference = collection(db, "admin");
    addDoc(reference, obj)
    .then(() => {
        console.log("successfully");
    })
    .catch((err) => {
        console.log(err);
    })
    
}