import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDhn1FEWwSUoNoBmQR_qzda3K4nJyySQgc",
    authDomain: "repeat-9d04e.firebaseapp.com",
    projectId: "repeat-9d04e",
    storageBucket: "repeat-9d04e.appspot.com",
    messagingSenderId: "400206239491",
    appId: "1:400206239491:web:f95f5a0d4b801e7b4c3b36",
    measurementId: "G-BCZ84H7SHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

let email = document.getElementById("email");
let password = document.getElementById("password");

window.signin = () => {
    let obj = {
        email: email.value,
        password: password.value,
    }
    console.log(obj);

    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then(async (res) => {
            let id = res.user.uid;
            const reference = doc(db, 'Users', id)

            const user = await getDoc(reference)
            if (user.exists()) {
                console.log(user.data());
            }
        })
        .catch((err) => {
            console.log(err);
        })

}