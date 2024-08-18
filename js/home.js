// //button
// let userIcon = document.getElementById("userMenu");
// let dropDown = document.getElementById("dropDown");
// let seConnecter = document.getElementById("seConnecter");
// let creerCompte = document.getElementById("creerCompte");
// let fonctionnement = document.getElementById("fonctionnementSection");
// let contactSection = document.getElementById("contactSection");

// seConnecter.addEventListener('click', function() {
//   window.location.href = 'login.html';
// }
// )
// creerCompte.addEventListener("click", function(event){
//   window.location.href = 'signup.html';
// })
// fonctionnement.addEventListener("click", function(event){
//   window.location.href = 'howItWorks.html';
// })
// contactSection.addEventListener("click", function(event){
//   window.location.href = 'contact.html';
// })
// userIcon.addEventListener("click", function(event){
//   dropDown.classList.toggle("d-none");
// })

// //select

let marque = document.getElementById("marqueSelect");
let modele = document.getElementById("modeleSelect");

// fetch("js/cars-data.json").then(
//   function(result){
//     return result.json();
//   }
// ).then(
//   function(data){
//     data.forEach(function(car){
//       let option = document.createElement("option");
//       option.value = car.mark;
//       option.text = car.mark;
//       marque.appendChild(option); 
//     })

//     //find matched options
//     marque.addEventListener("change", function(){
//       modele.innerHTML = ``;
//       let selectedMarque = marque.value;
//       console.log(selectedMarque);

//       let matchedCar = data.find(function(car){
//         return car.mark === selectedMarque;
//       })

//       matchedCar.models.forEach(function(model){
//         let modelOption = document.createElement("option");
//         modelOption.text = model.model;
//         modelOption.value = model.model;
//         modele.appendChild(modelOption);
//       })
//     })
//   }
// )
let catLi = document.querySelectorAll(".catLi");
catLi.forEach(function(element){
  element.addEventListener("click", function(event){
    catLi.forEach(function(el){
      el.classList.remove("active");
    })
    event.target.classList.add("active");
  })
})

let api = fetch("js/cars-data.json").then(
  function(result){
    return result.json();
  }
)
let stockage = document.querySelector(".swiper-wrapper");
let cardWrapper = document.querySelector(".card-wrapper");

api.then(function(data) {
  let idCounter = 3;
  let cardsCreated = [];
  data.forEach(function(brand) {
    brand.models.forEach(function(model, index) {
      let carCard = document.createElement("div");

      let carImage = document.createElement("div");
      carImage.classList.add("carImage");
      let carImg = document.createElement("img");
      carImg.src = model.link;
      carImage.appendChild(carImg);

      let carLabel = document.createElement("div");
      carLabel.classList.add("carLabel");

      let carCat = document.createElement("p");
      carCat.classList.add("carCat");
      carCat.textContent = model.category;
      carLabel.appendChild(carCat);

      let carLabelTitle = document.createElement("div");
      carLabelTitle.classList.add("carLabelTitle");

      let carName = document.createElement("p");
      carName.classList.add("carName");
      carName.textContent = brand.mark + " " + model.model;
      carName.setAttribute("data-mark", brand.mark);

      let likeIcon = document.createElement("i");
      let saveDiv =document.createElement("div");
      let saveDiv2 = document.createElement("div");
      likeIcon.classList.add("fa-regular", "fa-bookmark", "like");
      saveDiv.appendChild(likeIcon);
      saveDiv.classList.add("saveDiv");
      carLabelTitle.appendChild(carName);
      carLabelTitle.appendChild(saveDiv);
      saveDiv.onclick = function(event) {
        saveDiv2.style.setProperty("z-index", "0", "important");
      };
      saveDiv2.onclick = function(event) {
        saveDiv2.style.setProperty("z-index", "-1", "important");
      };

      let savedIcon = document.createElement("i");
      saveDiv2.classList.add("saveDiv2");
      savedIcon.classList.add("fa-solid", "fa-bookmark", "like");
      saveDiv2.appendChild(savedIcon);
      carLabelTitle.appendChild(saveDiv2);
      
      let carPrice = document.createElement("p");
      carPrice.classList.add("carPrice");
      carPrice.textContent = "MAD" + model.price;
      let jourSpan = document.createElement("span");
      jourSpan.classList.add("jourSpan");
      carPrice.appendChild(jourSpan);
      jourSpan.textContent = " /jour";

      let carFooter = document.createElement("div");
      carFooter.classList.add("carFooter");

      let infoCar1 = document.createElement("div");
      infoCar1.classList.add("infoCar", "rounded-pill");
      let infoIcon1 = document.createElement("i");
      infoIcon1.classList.add("fa-solid", "fa-fire", "infoIcon");
      let info1 = document.createElement("span");
      info1.classList.add("info");
      info1.textContent = model.fuel;

      let infoCar2 = document.createElement("div");
      infoCar2.classList.add("infoCar", "rounded-pill");
      let infoIcon2 = document.createElement("i");
      infoIcon2.classList.add("fa-regular", "fa-calendar", "infoIcon");
      let info2 = document.createElement("span");
      info2.classList.add("info");
      info2.textContent = model.year;

      let infoCar3 = document.createElement("div");
      infoCar3.classList.add("infoCar", "rounded-pill");
      let infoIcon3 = document.createElement("i");
      infoIcon3.classList.add("fa-solid", "fa-gear", "infoIcon");
      let info3 = document.createElement("span");
      info3.classList.add("info");
      info3.textContent = model.automatic ? "Auto" : "Manuel";

      infoCar1.appendChild(infoIcon1);
      infoCar1.appendChild(info1);
      infoCar2.appendChild(infoIcon2);
      infoCar2.appendChild(info2);
      infoCar3.appendChild(infoIcon3);
      infoCar3.appendChild(info3);

      carFooter.appendChild(infoCar1);
      carFooter.appendChild(infoCar2);
      carFooter.appendChild(infoCar3);

      let buttonRent = document.createElement("div");
      buttonRent.classList.add("buttonRent");
      
      let reserveButton = document.createElement("a");
      
      reserveButton.classList.add("btn", "btn-primary", "rounded-pill", "mt-3", "reserverBtn");
      reserveButton.textContent = "Reserver";

      if(model.model === "Swift"){
        reserveButton.href = `carTemplate.php?id=1`;
      } else if(model.model === "Jimny"){
        reserveButton.href = `carTemplate.php?id=2`;
      } else{
        reserveButton.href = `#`;
        idCounter++;
      }
      buttonRent.appendChild(reserveButton);
      buttonRent.appendChild(carPrice);

      carLabel.appendChild(carLabelTitle);
      carLabel.appendChild(carFooter);
      carLabel.appendChild(buttonRent);

      carCard.appendChild(carImage);
      carCard.appendChild(carLabel);
      carCard.classList.add("carCard", "col-lg-3", "col-md-6", "swiper-slide");
      carCard.setAttribute("data-mark", brand.mark);
      carCard.setAttribute("data-model", model.model);
      carCard.setAttribute("data-fuel", model.fuel);
      carCard.setAttribute("data-seats", model.seats);
      carCard.setAttribute("data-price", model.price);
      carCard.setAttribute("data-year", model.year);
      carCard.setAttribute("data-color", model.color);
      carCard.setAttribute("data-category", model.category);
      carCard.setAttribute("data-auto", model.automatic ? "Automatique" : "Manuel");
      stockage.appendChild(carCard);
      
    });
    return data;
  });
}).then(function(data){
  
// fetch("js/cars-data.json").then(
//   function(result){
//     return result.json();
//   }
// ).then(
//   function(data){
//     data.forEach(function(car){
//       let option = document.createElement("option");
//       option.value = car.mark;
//       option.text = car.mark;
//       marque.appendChild(option); 
//     })

//     //find matched options
//     marque.addEventListener("change", function(){
//       modele.innerHTML = ``;
//       let selectedMarque = marque.value;
//       console.log(selectedMarque);

//       let matchedCar = data.find(function(car){
//         return car.mark === selectedMarque;
//       })

//       matchedCar.models.forEach(function(model){
//         let modelOption = document.createElement("option");
//         modelOption.text = model.model;
//         modelOption.value = model.model;
//         modele.appendChild(modelOption);
//       })
//     })
//   }
// )
let catLi = document.querySelectorAll(".catLi");
catLi.forEach(function(element){
  element.addEventListener("click", function(event){
    catLi.forEach(function(el){
      el.classList.remove("active");
    })
    event.target.classList.add("active");
  })
})
})


window.onload = function(){

  let categories = document.querySelectorAll(".catLi");
  let carsCards = document.querySelectorAll(".carCard");
  categories.forEach(function(category){
    category.addEventListener("click", function(event){
      carsCards.forEach(function(card){
        let wantedCat = category.getAttribute("data-category");
        if(wantedCat === card.getAttribute("data-category") || wantedCat === "Tous"){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })
}
let inputs = document.querySelectorAll(".rn");
let form = document.querySelector("form");
let alrt = document.querySelector(".alert");
let alrt2 = document.querySelector(".alert2");
let alrt3 = document.querySelector(".alert3");
let stock = document.querySelector(".stok");
let dp = document.querySelector(".rnp"); //pickdate
let dd = document.querySelector(".rnd"); //drop date
let ad = document.querySelector(".alertDate");

form.addEventListener("submit", function(event){
  inputs.forEach(function(input){
    if(input.value.length === 0){
      event.preventDefault();
      alrt.classList.remove("d-none");
    }
  })
  let pickDate = new Date(dp.value);
  let dropDate = new Date(dd.value);
  let today = new Date();
  console.log(today);

  if(pickDate - dropDate >= 0){
    event.preventDefault();
    alrt2.classList.remove("d-none");
  }
  if(pickDate <= today){
    event.preventDefault();
    alrt3.classList.remove("d-none");
  }

})


document.addEventListener('DOMContentLoaded', function () {
  var dateInput = document.getElementById('pickDate');
  if (dateInput) {
      // Set placeholder text using JavaScript
      dateInput.placeholder = 'Choisir une date';
  }
});

let ep = document.querySelector(".ep");

dp.addEventListener("change", function(event){
  ep.textContent = dp.value;
})


let ed = document.querySelector(".ed");

dd.addEventListener("change", function(event){
  ed.textContent = dd.value;
  console.log(dd.value);
})






















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






