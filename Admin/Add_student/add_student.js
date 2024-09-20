import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let cnic = document.getElementById("cnic");
let userType = document.getElementById("userType");

window.AddStudent = () => {
    let obj = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        password: password.value,
        cnic: cnic.value,
        userType: userType.value,
    }
    console.log(obj);

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
            console.log(res);
            obj.id = res.user.uid;
            delete obj.password;
            const reference = doc(db, 'Users', obj.id);
            setDoc(reference, obj).then(() => {
                console.log(obj);
            })
                .catch((err) => {
                    console.log(err);
                })
            console.log(obj);

        })
        .catch((err) => {
            console.log(err);

        });

    const reference = collection(db, "students")
    addDoc(reference, obj)
        .then((res) => {
            console.log("Saved Successfully");
        }).catch((err) => {
            console.log(err);

        })
}