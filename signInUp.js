const signIn = document.getElementById("sign-In");
const signUp = document.getElementById("sign-Up");

const goToSignUpButton = document.getElementById("goToSignUpButton");
const returnToSignInButton = document.getElementById("returnToSignInButton");

const signPage = document.getElementById("sign-In");
const signPopUp = document.getElementById("signPopUp");

// display sign in page

signPopUp.addEventListener("click", () => {
    if (signUp.style.display = "none") {
        signIn.style.display = "flex";
    }

});

// toggle between sign in and sign up

goToSignUpButton.addEventListener("click", () => {
    signIn.style.display = "none";
    signUp.style.display = "flex";
});
returnToSignInButton.addEventListener("click", () => {
    signIn.style.display = "flex";
    signUp.style.display = "none";
});