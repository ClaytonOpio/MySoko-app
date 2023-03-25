// Firebase signIn and SignUp code starts here
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA9a5JjaUwS-zAH3hJPluQ03jrNTJHQflc",
    authDomain: "mysoko-2e04a.firebaseapp.com",
    projectId: "mysoko-2e04a",
    storageBucket: "mysoko-2e04a.appspot.com",
    messagingSenderId: "866904141963",
    appId: "1:866904141963:web:024cdc829ebe413f5ee48e",
    measurementId: "G-MC7JCHC5ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

const submitButton = document.getElementById("submit-button");
const signInButton = document.getElementById("signIn-button");

// Getting user credentials

var signInEmailIn = document.getElementById("signIn-email");
var signInPasswordIn = document.getElementById("signIn-password");

var signUpEmailIn = document.getElementById("signUp-email");
var ConfirmSignUpEmailIn = document.getElementById("ConfirmSignUp-email");
var signUpPasswordIn = document.getElementById("signUp-password");
var ConfirmSignUpPasswordIn = document.getElementById("ConfirmSignUp-password");

var email,
    password,
    signInEmail,
    signInPassword,
    signUpEmail,
    ConfirmSignUpEmail,
    signUpPassword,
    ConfirmSignUpPassword
    ;


submitButton.addEventListener("click", () => {

    signUpEmail = signUpEmailIn.value;
    ConfirmSignUpEmail = ConfirmSignUpEmailIn.value;
    signUpPassword = signUpPasswordIn.value;
    ConfirmSignUpPassword = ConfirmSignUpPasswordIn.value

    console.log(signUpEmail);
    console.log(1);
    var isVerified = true;

    if (signUpEmail == !ConfirmSignUpEmail) {
        isVerified = false;
    }
    if (signUpPassword == !ConfirmSignUpPassword) {
        isVerified = false;
    }

    if (
        signUpEmail == null ||
        ConfirmSignUpEmail == null ||
        signUpPassword == null ||
        ConfirmSignUpPassword == null
    ) {
        isVerified = false;
    }

    if (isVerified) {
        email = signUpEmail;
        password = signUpPassword;

        // Creating a new user

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...

                // Signing in a new user
                window.alert("Account successfully created, click ok to log in");

                signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        // ...

                        window.location ="./soko.html";

                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        window.alert(errorCode);
                        window.alert(errorMessage);
                    });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorCode);
                window.alert(errorMessage);
                // ..
            });

    }

});


signInButton.addEventListener("click", () => {

    signInEmail = signInEmailIn.value;
    signInPassword = signInPasswordIn.value;

    var allFilled = true;
    if (signInEmail == null) {
        window.alert("Please fill your email");

        allFilled = false;
    }

    if (signInPassword == null) {
        window.alert("please fill in your password");

        allFilled = false;
    }

    if (allFilled) {
        email = signInEmail;
        password = signInPassword;

        // Signing in an existing user

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...

                window.location ="./soko.html";

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                window.alert(errorCode);
                window.alert(errorMessage);
            });
    }
})


