
let payOptions = document.querySelectorAll(".payOption");
payOptions.forEach(function(option){
  option.addEventListener("click", function(event){

    payOptions.forEach(function(opt){
      opt.classList.remove("outline");
    })
    option.classList.add("outline");
  })
})


let secs = document.querySelectorAll(".sec");
let buttonDown = document.querySelector(".buttonDown");
buttonDown.addEventListener("click", function(event){

  buttonDown.classList.toggle("rotate");
  secs.forEach(function(sec){
    sec.classList.toggle("d-none");
  })

})

let way = document.querySelector(".paymentGateway");
let g1 = document.querySelector(".g1");
let g2 = document.querySelector(".g2");
let g3 = document.querySelector(".g3");
let payVisa = document.querySelector(".payVisa");

g1.addEventListener("click", function(event){
  way.value = "paypal";
  payVisa.classList.remove("d-none");
  confirme.classList.add("d-none");
  form.setAttribute("action", "checkout.php");
})
g2.addEventListener("click", function(event){
  way.value = "visa card";
  payVisa.classList.remove("d-none");
  confirme.classList.add("d-none");
  form.setAttribute("action", "checkout.php");
})
g3.addEventListener("click", function(event){
  way.value = "sur place";
  payVisa.classList.add("d-none");
  confirme.classList.remove("d-none");
  form.setAttribute("action", "verification.php");
})



let inputs = document.querySelectorAll(".in");
let confirme = document.querySelector(".confirm");
let alrt = document.querySelector(".alert");
let inp = document.querySelector(".inp");
let alertPay = document.querySelector(".alertPay");
let ch = document.querySelector(".ch");
let alertGen = document.querySelector(".alertGen");
let form = document.querySelector(".frm");


confirme.addEventListener("click", function(event){
  inputs.forEach(function(input){
    if(input.value.length === 0){
      event.preventDefault();
      alrt.classList.remove("d-none");
    }
  })
  if(inp.value.length === 0){
    event.preventDefault();
    alertPay.classList.remove("d-none");
  }
  if(!ch.checked){
    event.preventDefault();
    alertGen.classList.remove("d-none");
  }
})

payVisa.addEventListener("click", function(event){
  inputs.forEach(function(input){
    if(input.value.length === 0){
      event.preventDefault();
      alrt.classList.remove("d-none");
    }
  })
  if(inp.value.length === 0){
    event.preventDefault();
    alertPay.classList.remove("d-none");
  }
  if(!ch.checked){
    event.preventDefault();
    alertGen.classList.remove("d-none");
  }
})



