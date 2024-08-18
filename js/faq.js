let faqTitles = document.querySelectorAll(".questionTitle");
faqTitles.forEach(function(element){
  element.addEventListener("click", function(event){
    element.nextElementSibling.classList.toggle("d-none");
    let arrow = element.querySelector(".fa-angle-down");
    arrow.classList.toggle("rotate");
  })
})

let faqBox = document.querySelectorAll(".quetionBox");
faqBox.forEach(function(element){
  element.addEventListener("click", function(event){
  element.classList.toggle("boxShadow");
  })
  }
)