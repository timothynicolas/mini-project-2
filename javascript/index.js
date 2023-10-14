let signupBTN = document.getElementById("signupBtn");
let signinBTN = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

function signInSwitch(){
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In"
    signupBTN.classList.add("disable");
    signinBTN.classList.remove("disable");
}

function signUpSwitch(){
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up"
    signupBTN.classList.remove("disable");
    signinBTN.classList.add("disable");
}

