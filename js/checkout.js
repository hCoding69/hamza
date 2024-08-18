let inputs = document.querySelectorAll(".input");
let n = document.querySelector(".n");
let alerte = document.querySelector(".alert");
let card = document.querySelector(".inputCardNumber");
let cardError = document.querySelector(".val");
let chError = document.querySelector(".val1");
let ch = document.querySelector(".ch");
n.addEventListener("click", function(event){
  inputs.forEach(function(input){
    if(input.value.length === 0){
      event.preventDefault();
      alerte.classList.remove("d-none");
    }
  })

  if(card.value.length < 16){
    event.preventDefault();
    cardError.classList.remove("d-none");
  }
  if(!ch.checked){
    event.preventDefault();
    chError.classList.remove("d-none");
  }
})
card.addEventListener("input", function(event){
  card.value = card.value.replace(/\D/g, '');
})

let inputMonth = document.querySelector(".inputMonth");
let inputYear = document.querySelector(".inputYear");
inputMonth.addEventListener("input", function(event){
  inputMonth.value = inputMonth.value.replace(/\D/g, '');
  if(+inputMonth.value>=12){
    inputMonth.value = 12;
  } 
  
  if(inputMonth.value.length === 2){
    inputYear.focus();
  }
})


inputYear.addEventListener("input", function(event){
  inputYear.value = inputYear.value.replace(/\D/g, '');
    inputYear.focus();
    if(inputYear.value.length === 2){
      inputYear.blur();
    }
})

let inputCVV = document.querySelector(".inputCVV");
inputCVV.addEventListener("input", function(event){
  inputCVV.value = inputCVV.value.replace(/\D/g, '');
})

