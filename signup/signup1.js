// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxcKkf1TB27g1tiJay3KxiTwOlVwKCb5Y",
    authDomain: "n-luxora.firebaseapp.com",
    projectId: "n-luxora",
    storageBucket: "n-luxora.appspot.com",
    messagingSenderId: "62107544969",
    appId: "1:62107544969:web:fb320032162479c893c558",
    measurementId: "G-JTYQQF88PN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

//input

const signupForm = document.getElementById("signupForm");


signupForm.addEventListener('submit', async function (e) {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const name = document.getElementById("signupName").value;
    const password = document.getElementById("signupPassword").value;
    
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
             const user = userCredential.user;
                alert("account succefully created")
                window.location.href = "login.html"
    
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            // alert(errorMessage);
      
        });

})