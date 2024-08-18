//buttons
let continueToPassword = document.getElementById("continueToPassword");
let continueToPhone = document.getElementById("continueToPhone");
let backButton = document.getElementById("backButton");
let backToPassword = document.getElementById("backToPassword");
let continueToVerification = document.getElementById("continueToVerification");
let backToPhone = document.getElementById("backToPhone");
let continueToSuccess = document.getElementById("continueToSuccess");
//divs
let emailStep = document.getElementById("emailStep")
let passwordStep = document.getElementById("passwordStep");
let phoneStep = document.getElementById("phoneStep");
let nameStep = document.getElementById("nameStep");
let successStep = document.getElementById("successStep");
let submit = document.getElementById("submitForm")
//inputs
let emailInput =document.getElementById("emailCreate");
let passwordInput = document.getElementById("passwordEntered");
let passwordConfirmInput = document.getElementById("passwordConfirm");
let phoneInput = document.getElementById("phoneNumberEnter");
let nomInput = document.getElementById("nom");
let prenomInput = document.getElementById("prenom");
//errors
let emailError = document.getElementById("emailError");
let passwordShortError = document.getElementById("verifyShortPassword");
let passwordDifferentError = document.getElementById("verifyDifferntPassword");
let phoneNumberError = document.getElementById("validPhoneEntredNumber");
let phoneShortError = document.getElementById("validePhoneEntred");

/*verify email => remove d-none if there is no @
.............. => step1 d-none and step2 d-block*/
//events
//continue to password

continueToPassword.addEventListener("click", function(event){
  if(emailInput.value.includes("@")){
    emailStep.style.display = "none";
    passwordStep.style.display = "block";
    emailError.classList.add("d-none");
  } else{
    emailError.classList.remove("d-none");
  }
})
//back to email
backButton.addEventListener("click", function(event){
    emailStep.style.display = "block";
    passwordStep.style.display = "none";
    emailError.classList.add("d-none");
})
//continue to phone
continueToPhone.addEventListener("click", function(event) {
  if (passwordConfirmInput.value !== passwordInput.value || passwordInput.value.length < 8) {
    if (passwordInput.value.length < 8) {
      passwordShortError.classList.remove("d-none");
    } else if (passwordConfirmInput.value !== passwordInput.value) {
      passwordDifferentError.classList.remove("d-none");
    }
  } else {
    passwordShortError.classList.add("d-none");
    passwordDifferentError.classList.add("d-none");
    passwordStep.style.display = "none";
    phoneStep.classList.remove("d-none");
  }
})
//back to password
backToPassword.addEventListener("click", function(event){
  phoneStep.classList.add("d-none");
  passwordStep.style.display="block";
})
//phone verification and continue to name
continueToVerification.addEventListener("click" ,function(event){
  if(isNaN(parseInt(phoneInput.value)) || phoneInput.value.length < 10){
    if(isNaN(parseInt(phoneInput.value))){
      phoneNumberError.classList.remove("d-none");
    }
    else if(phoneInput.value.length < 10){
      phoneShortError.classList.remove("d-none");
    }
    else{
      phoneShortError.classList.remove("d-none");
      phoneNumberError.classList.remove("d-none");
    }
  }
  else{
    phoneStep.classList.add("d-none");
    phoneNumberError.classList.add("d-none");
    phoneShortError.classList.add("d-none");
    nameStep.classList.remove("d-none");
  }
})
//back to phone
backToPhone.addEventListener("click", function(event){
  phoneStep.classList.remove("d-none");
  nameStep.classList.add("d-none");
})
//continue to success
continueToSuccess.addEventListener("click", function(event){
  nameStep.classList.add("d-none");
  successStep.classList.remove("d-none");
})

