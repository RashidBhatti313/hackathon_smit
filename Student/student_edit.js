import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCPuDiMj600-uVYEl3EL6G245JuPxnOEIw",
    authDomain: "hackathon-67c75.firebaseapp.com",
    projectId: "hackathon-67c75",
    storageBucket: "hackathon-67c75.appspot.com",
    messagingSenderId: "985237759368",
    appId: "1:985237759368:web:4d00ae35efcfbc4aa8063d",
    measurementId: "G-0W0ZR7V1N5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

let first_name_edit = document.getElementById("first_name_edit");
let last_name_edit = document.getElementById("last_name_edit");
let cnic_edit = document.getElementById("cnic_edit");

window.studentEdit = async () => {
    try {
        let updatedData = {
            first_name: first_name_edit.value,
            last_name: last_name_edit.value,
            cnic: cnic_edit.value,
        };

        const docRef = await addDoc(collection(db, "students"), updatedData);
        console.log("Student profile added with ID: ", docRef.id);
        alert("Profile updated successfully!");

        window.location.href = "../Admin/studentList/studentList.html";
    } catch (error) {
        console.error("Error updating student data: ", error);
        alert("Failed to update profile!");
    }
};

window.onload = async () => {
    const querySnapshot = await getDocs(collection(db, "students"));
    querySnapshot.forEach((doc) => {
        const studentData = doc.data();
        first_name_edit.value = studentData.first_name;
        last_name_edit.value = studentData.last_name;
        cnic_edit.value = studentData.cnic;
    });
};
