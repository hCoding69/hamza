window.addEventListener("load", function() {
  let startCompa = document.querySelector(".comparCall");
  let addCar = document.querySelector(".addIcon");
  let compaForm = document.querySelector(".comparaisonForm");
  let comparaison = document.querySelector(".comparaison");
  let navBar = document.querySelector(".navbar");
  let addToCompa = document.querySelector(".addToCompa");
  let marque = document.getElementById("marqueSelect");
  let modele = document.getElementById("modeleSelect");
  let comparaisonContent = document.querySelector(".comparaisonContent");
  let marqueSelect = document.getElementById("marqueSelect");
  let modeleSelect = document.getElementById("modeleSelect");
  let infoMark = document.querySelector(".attribute1");
  let infoModel = document.querySelector(".attribute12");
  let infoPrice = document.querySelector(".attributeInfo3");
  let infoCarburant = document.querySelector(".attributeInfo4");
  let infoCategorie = document.querySelector(".attributeInfo5");
  let infoAnnee = document.querySelector(".attributeInfo6");
  let infoSiege = document.querySelector(".attributeInfo7");
  let infoTransmition = document.querySelector(".attributeInfo8");
  let infoCouleur = document.querySelector(".attributeInfo9");
  let initialImg = document.querySelector(".initialImg");
  let compaForm2 = document.querySelector(".comparaisonForm2");
  let addNewCar = document.querySelector(".addNewCar");
  let imageContainer2 = this.document.querySelector(".imageContainer2");

  addCar.addEventListener("click", function(event){
    compaForm2.style.setProperty("display", "block", "important"); 
});

  let addToCompa2 = document.querySelector(".addToCompa2");
  addToCompa2.addEventListener("click", function(event){
    compaForm2.style.setProperty("display", "none", "important");
    addNewCar.classList.add("d-none");
    imageContainer2.classList.remove("d-none");
  })
  addToCompa.addEventListener("click", function(event){
    if(marque.value === "choisir" || modele.value === "choisir"){
      event.preventDefault();
    } else{
      compaForm.classList.add("d-none");
      comparaison.classList.remove("blur");
      navBar.classList.remove("blur");
      navBar.classList.remove("unclickable");
      comparaison.classList.remove("unclickable");
      comparaison.classList.add("d-none");
      comparaisonContent.classList.remove("d-none");
    }
  })
  startCompa.addEventListener("click", function(event) {
    compaForm.classList.remove("d-none");
    comparaison.classList.add("blur");
    comparaison.classList.add("unclickable");
    navBar.classList.add("blur");
    navBar.classList.add("unclickable");
  });
  
  let editMenu = document.querySelector(".editMenu");
  let menuIcon = document.querySelector(".iconMenu");
  menuIcon.addEventListener("click", function(event){
    editMenu.classList.toggle("d-none");
  })

  let del = document.querySelector(".delete");
  del.addEventListener("click", function(event){
    window.location = 'comparaison.php';
  })

  let edit = document.querySelector(".edit");
  edit.addEventListener("click", function(event){
    compaForm.style.setProperty("display", "block", "important");
    addToCompa.addEventListener("click", function(event){
      compaForm.style.setProperty("display", "none", "important");
    })
  })




  let editMenu2 = document.querySelector(".editMenu2");
  let menuIcon2 = document.querySelector(".iconMenu2");
  menuIcon2.addEventListener("click", function(event){
    editMenu2.classList.toggle("d-none");
  })

  let del2 = document.querySelector(".delete2");
  del2.addEventListener("click", function(event){
    addNewCar.classList.remove("d-none");
    imageContainer2.classList.add("d-none");
  })

  let edit2 = document.querySelector(".edit2");
  edit2.addEventListener("click", function(event){
    compaForm2.style.setProperty("display", "block", "important");
    addToCompa2.addEventListener("click", function(event){
      compaForm2.style.setProperty("display", "none", "important");
    })
  })


  document.body.addEventListener("click", function(event) {
    if (!event.target.classList.contains("comparCall")  && !event.target.closest(".comparaisonForm")) { //check that the target event have a parent div named comparaionForm
      compaForm.classList.add("d-none");
      comparaison.classList.remove("blur");
      navBar.classList.remove("blur");
      navBar.classList.remove("unclickable");
      comparaison.classList.remove("unclickable");
    }
  });

  let cancel = document.querySelector(".cancel")
  cancel.addEventListener("click", function(event) {
    compaForm.classList.add("d-none");
    navBar.classList.remove("blur");
    navBar.classList.remove("unclickable");
    comparaison.classList.remove("blur");
    comparaisonContent.classList.remove("unclickable");
  });
  let cancel2 = document.querySelector(".cancel2")
  cancel2.addEventListener("click", function(event) {
    compaForm2.style.setProperty("display", "none", "important"); 
    navBar.classList.remove("unclickable");
    comparaisonContent.classList.remove("unclickable");
  });
  fetch("js/cars-data.json")
  .then(function(result) {
    return result.json();
  })
  .then(function(data) {

    data.forEach(function(car) {
      let option = document.createElement("option");
      option.value = car.mark;
      option.text = car.mark;
      option.setAttribute("data-mark", car.mark);
      option.classList.add("markOption");
      marque.appendChild(option);
      let markOptions = document.querySelectorAll(".markOption");
      let modelOptions = document.querySelectorAll(".modelOption");
      marque.addEventListener("change", function(event){
        if(option.selected){
          let selectedMarque = option.getAttribute("data-mark");
        }
      })

    });
    // Find matched options
    marque.addEventListener("change", function() {
      let selectedMarque = marque.value;
      let matchedCar = data.find(function(car) {
        return car.mark === selectedMarque;
      });

      matchedCar.models.forEach(function(model) {
        let modelOption = document.createElement("option");
        modelOption.text = model.model;
        modelOption.value = model.model;
        modele.appendChild(modelOption);
        modelOption.setAttribute("data-model", model.model);
        modelOption.classList.add("modelOption");
        modele.addEventListener("change", function(event){
          if(modelOption.selected){
            let selectedModel = modelOption.getAttribute("data-model");
            infoMark.textContent = matchedCar.mark;
            infoModel.textContent = matchedCar.mark + " " + model.model;
            initialImg.src = model.link;
            infoPrice.textContent = model.price;
            infoCarburant.textContent = model.fuel;
            infoCategorie.textContent = model.category;
            infoAnnee.textContent = model.year;
            infoSiege.textContent = model.seats
            infoTransmition.textContent = model.aautomatic ? "Automatique" : "Manuel";
            infoCouleur.textContent = model.color;
          }
        })

      });

    });
    return data;
  })

  
  
  
  
  
  
  let marque2 = document.getElementById("marqueSelect2");
  let modele2 = document.getElementById("modeleSelect2");


  let infoMark2 = document.querySelector(".attribute19");
  let infoModel2 = document.querySelector(".attribute122");
  let infoPrice2 = document.querySelector(".attributeInfo32");
  let infoCarburant2 = document.querySelector(".attributeInfo42");
  let infoCategorie2 = document.querySelector(".attributeInfo52");
  let infoAnnee2 = document.querySelector(".attributeInfo62");
  let infoSiege2 = document.querySelector(".attributeInfo72");
  let infoTransmition2 = document.querySelector(".attributeInfo82");
  let infoCouleur2 = document.querySelector(".attributeInfo92");
  let initialImg2 = document.querySelector(".initialImg2");

  // Fetch data from JSON file
fetch("js/cars-data.json")
.then(function(result) {
  return result.json();
})
.then(function(data) {
  // Handle data for the second form
  data.forEach(function(car) {
    let option2 = document.createElement("option");
    option2.value = car.mark;
    option2.text = car.mark;
    option2.setAttribute("data-mark", car.mark);
    option2.classList.add("markOption2"); // Different class for the second form
    marque2.appendChild(option2); // Different ID for the second form's marque select

    marque2.addEventListener("change", function(event){
      if(option2.selected){
        let selectedMarque2 = option2.getAttribute("data-mark");
      }
    })

  });
  // Find matched options
  marque2.addEventListener("change", function() {
    let selectedMarque2 = marque2.value;
    let matchedCar2 = data.find(function(car) {
      return car.mark === selectedMarque2;
    });

    matchedCar2.models.forEach(function(model) {
      let modelOption2 = document.createElement("option");
      modelOption2.innerHTML = ``;
      modelOption2.text = model.model;
      modelOption2.value = model.model;
      modele2.appendChild(modelOption2);
      modelOption2.setAttribute("data-model", model.model);
      modelOption2.classList.add("modelOption");
      modele2.addEventListener("change", function(event){
        if(modelOption2.selected){
          let selectedModel2 = modelOption2.getAttribute("data-model");
          infoMark2.textContent = matchedCar2.mark;
          infoModel2.textContent = matchedCar2.mark + " " + model.model;
          initialImg2.src = model.link;
          infoPrice2.textContent = model.price;
          infoCarburant2.textContent = model.fuel;
          infoCategorie2.textContent = model.category;
          infoAnnee2.textContent = model.year;
          infoSiege2.textContent = model.seats
          infoTransmition2.textContent = model.aautomatic ? "Automatique" : "Manuel";
          infoCouleur2.textContent = model.color;
        }
      })

    });

  });
  return data;
})
  
    

  
  




}
)





