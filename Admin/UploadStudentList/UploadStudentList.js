import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

const table__Body = document.getElementById("table__Body");

const studentMarks = []

const renderTables = () => {
    table__Body.innerHTML = ""
    studentMarks.forEach((x) => {
        table__Body.innerHTML += `
        <tr class="bg-white border-b hover:bg-gray-100 transition-all">
    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${x.course}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.studentId}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.marks}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.totalMarks}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${x.grade}</td>
</tr>
        `
    })
}

const getMarks = async () => {
    const reference = collection(db, "admin")
    const dt = await getDocs(reference);

    dt.forEach((doc) => {
        studentMarks.push({
            ...doc.data(),
        })
    });
    console.log(studentMarks);
    renderTables();
}
getMarks();