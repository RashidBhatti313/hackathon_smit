import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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

const tableBody = document.getElementById("tableBody");

const studentData = []

const renderTable = () => {
    tableBody.innerHTML = ""
    studentData.forEach((x) => {
        tableBody.innerHTML += `
        <tr class="bg-gray-100 border-b hover:bg-gray-200 transition duration-200 ease-in-out">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">${x.first_name}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.last_name}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.email}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.password}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.cnic}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.userType}</td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button onclick="editStudent('${x.id}')"
            class="text-blue-600 hover:text-blue-900 bg-blue-200 py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
            Edit
        </button>
        <button onclick="deleteStudent(${x.id})"
            class="ml-2 text-red-600 hover:text-red-900 bg-red-200 py-1 px-3 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
            Delete
        </button>
    </td>
</tr>
        `
    })
}
const editStudent = (id) => {
    localStorage.setItem('editStudentId', id);

    window.location.href = "../../Student/student_edit.html";
};

const getData = async () => {
    const reference = collection(db, "students");
    const dt = await getDocs(reference);

    dt.forEach((doc) => {
        studentData.push({
            ...doc.data(),
            id: doc.id,
        })
    });
    console.log(studentData);
    renderTable();
}
getData();