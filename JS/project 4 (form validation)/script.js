var userName = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirm");

function handleChange(inputElement) {
    const errorClass = inputElement.getAttribute('data-error');
    const errorElement = document.querySelector(`.${errorClass}`);
    if (errorElement) {
        errorElement.innerHTML = "";
    }
}


const handleSubmit = (e) => {
  e.preventDefault();

  if (
    validateUserName() &&
    validateEmail() &&
    validatePassword() &&
    confirmPasswordCheck()
  ) {
    console.log(
      userName.value,
      email.value,
      password.value,
      confirmPassword.value
    );

    document.querySelector(".username").value = "";
    document.querySelector(".email").value = "";
    document.querySelector(".password").value = "";
    document.querySelector(".confirm").value = "";
  } else {
    validateUserName()
    validateEmail()
    validatePassword()
    confirmPasswordCheck()
    console.log("recheck the form");
  }
};

function validateUserName() {

  if (userName.value != "" && userName.value.length >= 4) {
    return true;
  } else {
    document.querySelector(".errorUsername").innerHTML =
      "please write correct user name ";
    return false;
  }
}

function validateEmail() {

  if (email.value != "" && email.value.includes("@")) {
    return true;
  } else {
    document.querySelector(".errorEmail").innerHTML =
      "please write valid email ";
    return false;
  }
}
function validatePassword() {

  if (
    password.value !== "" &&
    /[A-Z]/.test(password.value) &&
    /[a-z]/.test(password.value) &&
    /[0-9]/.test(password.value) &&
    password.value.length >= 6
  ) {
    return true;
  } else {
    document.querySelector(".errorPassword").innerHTML =
      "Please enter a valid password.";
    return false;
  }
}

function confirmPasswordCheck() {
  if (confirmPassword.value != "" && confirmPassword.value === password.value) {
    return true;
  } else {
    document.querySelector(".errorConfirmPassword").innerHTML =
      "password should be same ";
    return false;
  }
}


document.querySelector(".btn").addEventListener("click", handleSubmit);
