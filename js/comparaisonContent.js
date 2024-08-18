document.addEventListener("DOMContentLoaded", function() {
  let compaForm = document.querySelector(".comparaisonForm");
  let navBar = document.querySelector(".navbar");
  let marqueSelect = document.getElementById("marqueSelect");
  let modeleSelect = document.getElementById("modeleSelect");
  let infoMark = document.querySelector(".initialCarAttributes .attributeInfo1");
  let infoModel = document.querySelector(".initialCarAttributes .attributeInfo2");
  let infoPrice = document.querySelector(".initialCarAttributes .attributeInfo3");
  let infoCarburant = document.querySelector(".initialCarAttributes .attributeInfo4");
  let infoCategorie = document.querySelector(".initialCarAttributes .attributeInfo5");
  let infoAnnee = document.querySelector(".initialCarAttributes .attributeInfo6");
  let infoSiege = document.querySelector(".initialCarAttributes .attributeInfo7");
  let infoTransmition = document.querySelector(".initialCarAttributes .attributeInfo8");
  let infoCouleur = document.querySelector(".initialCarAttributes .attributeInfo9");
  let initialImg = document.querySelector(".initialImg");


  let addCar = document.querySelector(".addIcon");
  let comparaisonContent = document.querySelector(".comparaisonContent")

  addCar.addEventListener("click", function(event) {
    compaForm.classList.remove("d-none");
    comparaisonContent.classList.add("unclickable");
    navBar.classList.add("unclickable");
  });
  let cancel = document.querySelector(".cancel")
  cancel.addEventListener("click", function(event) {
    compaForm.classList.add("d-none");
    navBar.classList.remove("blur");
    navBar.classList.remove("unclickable");
    comparaisonContent.classList.remove("blur");
    comparaisonContent.classList.remove("unclickable");
  });


  marqueSelect.addEventListener("change", function() {
    let selectedMarque = marqueSelect.value;
    let selectedModele = modeleSelect.value;

    fetch("js/cars-data.json")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.forEach(function(brand) {
          if (selectedMarque === brand.mark) {
            brand.models.forEach(function(model) {
              if (selectedModele === model.value) {
                infoMark.textContent = brand.mark;
                infoModel.textContent = brand.mark + " " + model.value;
                infoPrice.textContent = model.price;
                infoCarburant.textContent = model.fuel;
                infoCategorie.textContent = model.category;
                infoAnnee.textContent = model.year;
                infoSiege.textContent = model.seats;
                infoTransmition.textContent = model.transmission;
                infoCouleur.textContent = model.color;
                initialImg.setAttribute("src", model.linkdd);
              }
            });
          }
        });
      })
      .catch(function(error) {
        console.error('Error fetching data:', error);
      });
  });

});
