import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

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
const db = getFirestore();

const checkCNIC = async (event) => {
    event.preventDefault(); // Prevent form submission

    const cnic = document.getElementById("cnic-result").value;
    const reference = collection(db, "admin");
    const dt = await getDocs(reference);

    // Check if CNIC exists
    const studentExists = dt.docs.some(doc => doc.data().cnic && doc.data().cnic.toLowerCase() === cnic.toLowerCase());

    // Show or hide the upload form based on CNIC validity
    const uploadForm = document.getElementById("upload-student-list");
    if (studentExists) {
        uploadForm.classList.remove("hidden");
    } else {
        uploadForm.classList.add("hidden");
        alert("CNIC not found!");
    }
}
