let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let step1 = document.querySelector(".step1");
let step2 = document.querySelector(".step2");
let back = document.querySelector(".bk");
let email = document.getElementById("email");
let password = document.getElementById("password");
let val = document.getElementById("val");

back.addEventListener("click", function(event){
  step2.style.display = "none";
  step1.style.display = "block";
  }
)

//email valid => remove d-none
btn1.addEventListener("click", function(event){
  if(email.value.includes("@")){
    step1.style.display = "none";
    step2.style.display = "block";
    val.classList.add("d-none");
  } else{
    val.classList.remove("d-none");
  }
})
btn2.addEventListener("click", function(event){
  if(password.value.length < 8){
    valPass.classList.remove("d-none");
    event.preventDefault();
  }
}
)