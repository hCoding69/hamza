let unsaved = document.querySelector(".unsaved");
let saved = document.querySelector(".saved");
console.log(unsaved);

unsaved.onclick = function(event) {
  saved.style.setProperty("z-index", "0", "important");
};

saved.onclick = function(event) {
  saved.style.setProperty("z-index", "-1", "important");
};
let mesure = document.querySelector(".mesure");
let spesification = document.querySelector(".specification");
let mesuretable = document.querySelector(".mes");
let specsTable = document.querySelector(".sps");
mesure.addEventListener("click", function(event){
  mesure.classList.add("active");
  spesification.classList.remove("active");
  specsTable.classList.add("d-none");
  mesuretable.classList.remove("d-none");
})

spesification.addEventListener("click", function(event){
  mesure.classList.remove("active");
  spesification.classList.add("active");
  specsTable.classList.remove("d-none");
  mesuretable.classList.add("d-none");
})
  
let addButtons = document.querySelectorAll(".ajouterUnique");
let checkeIcon1 = document.querySelector(".optionAddedUnique1");
let checkeIcon2 = document.querySelector(".optionAddedUnique2");
let checkeIcon3 = document.querySelector(".optionAddedUnique3");
let addButton1 = document.querySelector(".ajouterUnique1");
let addButton2 = document.querySelector(".ajouterUnique2");
let addButton3 = document.querySelector(".ajouterUnique3");

addButtons.forEach(function(button){
  button.addEventListener("click", function(event){
    if(button.classList.contains("ajouterUnique2")){
      addButton2.classList.add("d-none");
      checkeIcon2.classList.remove("d-none");
      checkeIcon1.classList.add("d-none");
      addButton1.classList.remove("d-none");
      checkeIcon3.classList.add("d-none");
      addButton3.classList.remove("d-none");
      let franOption = document.querySelector(".franOption");
      franOption.name = button.id;
    } else if(button.classList.contains("ajouterUnique3")){
      addButton3.classList.add("d-none");
      checkeIcon3.classList.remove("d-none");
      checkeIcon2.classList.add("d-none");
      addButton2.classList.remove("d-none");
      checkeIcon1.classList.add("d-none");
      addButton1.classList.remove("d-none");
      let franOption = document.querySelector(".franOption");
      franOption.name = button.id;
    } else{
      addButton1.classList.add("d-none");
      checkeIcon1.classList.remove("d-none");
      checkeIcon2.classList.add("d-none");
      addButton2.classList.remove("d-none");
      checkeIcon3.classList.add("d-none");
      addButton3.classList.remove("d-none");
      let franOption = document.querySelector(".franOption");
      franOption.name = button.id;
    }
  })
})

  let option1 = document.getElementById("option1");
  let option2 = document.getElementById("option2");
  let option3 = document.getElementById("option3");
  let option4 = document.getElementById("option4");
  let option5 = document.getElementById("option5");
  let option6 = document.getElementById("option6");
  let option7 = document.getElementById("option7");
  let option8 = document.getElementById("option8");
  let option9 = document.getElementById("option9");
  let option10 = document.getElementById("option10");
  let option11 = document.getElementById("option11");
  let option12 = document.getElementById("option12");
  let buttons = document.querySelectorAll(".add");
  let checkIcons = document.querySelectorAll(".done");
  let removeButtons = document.querySelectorAll(".remove")
  
  buttons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        button.classList.add("d-none");
        button.nextElementSibling.classList.remove("d-none");
        let next = button.nextElementSibling;
        next.nextElementSibling.classList.remove("d-none");
        let nextToForm = next.nextElementSibling;
        nextToForm.nextElementSibling.setAttribute("data-option", button.id);
        let form = nextToForm.nextElementSibling;
        form.firstElementChild.name = form.getAttribute("data-option");
        console.log(nextToForm.nextElementSibling);
        console.log(form.firstElementChild);

    });
  });

  removeButtons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        btn.classList.add("d-none");
        btn.nextElementSibling.removeAttribute("data-option");
        let form = btn.nextElementSibling;
        form.firstElementChild.name = "";
        console.log(btn.nextElementSibling);
        console.log(form.firstChild);
        btn.previousElementSibling.classList.add("d-none");
        let prev = btn.previousElementSibling;
        prev.previousElementSibling.classList.remove("d-none");
    });
});

let reserver = document.querySelector(".reserver");
let resForm = document.querySelector(".resForm");
let saveForm = document.querySelector(".saveForm");
let saveNow = document.querySelector(".sau");

reserver.addEventListener("click", function(event){
  saveNow.textContent = "Vehicule Sauvegardé";
  resForm.submit();
});
saveNow.addEventListener("click", function(event){
  saveForm.submit();
});







  var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    1400:{
      slidesPerView: 3,
    }
  }
});
