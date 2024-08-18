let bars = document.querySelectorAll(".bs");
let z = document.querySelector(".z");

bars.forEach(function(bar){
  bar.addEventListener("click", function(event){
    bars.forEach(function(bar){
      bar.firstElementChild.classList.remove("activ");
      bar.previousElementSibling.classList.add("d-none");  
    })
    bar.previousElementSibling.classList.remove("d-none");
    bar.firstElementChild.classList.add("activ");
  })
})


let di = document.querySelector(".di");
let ok = document.querySelector(".ok");
let dr = document.querySelector(".dr");
let alt = document.querySelector(".alt");
ok.addEventListener("input", function(event){
  user = ok.value;
  di.textContent =  user[0].toUpperCase();
})
let xs = document.querySelectorAll(".x");
dr.addEventListener("click", function(event){
  xs.forEach(function(x){
    if(x.value.length === 0){
      event.preventDefault();
      alt.classList.remove("d-none");
    }
  })
})


