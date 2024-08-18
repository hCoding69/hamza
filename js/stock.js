let modelList = document.getElementById("modelsFilter");
let filterTitle = document.querySelectorAll(".filterTitle");
let stockage = document.querySelector(".stockage");
let carCard = document.querySelectorAll(".carCard");

let markBoxes = [];

let api = fetch("js/cars-data.json").then(
  function(result){
    return result.json();
  }
).then(function(data) {
  data.forEach(function(car) {
    let input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("check");
    input.classList.add("markBoxes");
    input.id = car.mark;
    markBoxes.push(input);
    let label = document.createElement("label");
    label.htmlFor = car.mark;
    label.textContent = car.mark;
    let modelFilter = document.createElement("div");
    modelFilter.classList.add("model", "d-flex", "align-items-center", "gap-1");
    modelList.appendChild(modelFilter);
    modelFilter.appendChild(input);
    modelFilter.appendChild(label);
  });
  return data;
});

api.then(function(data) {
  let addedColors = []
  data.forEach(function(mark) {
      mark.models.forEach(function(model) {
        if(!(addedColors.includes(model.color))){
          let colorBox = document.createElement(`div`);
          colorBox.classList.add("colorBox");
          let input = document.createElement("input");
          input.type = "checkbox";
          input.classList.add("check");
          input.classList.add("colorCheckBox");
          input.id = model.color;
          let label = document.createElement("label");
          label.htmlFor = model.color;
          label.classList.add("colorContainer");
          let spanColor = document.createElement("span");
          spanColor.classList.add("color");
          if(model.codeColor === "#ffffff"){
            spanColor.classList.add("borderWhite");
          }
          spanColor.style.backgroundColor = model.codeColor;
          let spanText = document.createElement("span");
          spanText.classList.add("colorText");
          spanText.textContent = model.color;
          colorBox.appendChild(input);
          label.appendChild(spanColor);
          label.appendChild(spanText);
          colorBox.appendChild(label);
          let colors = document.getElementById("colors");
          colors.appendChild(colorBox);
          addedColors.push(model.color);
        }
      });
  });
  return data;
}).then(function(data){
  let fuelAdded = [];
  data.forEach(function(mark){
    mark.models.forEach(function(model){
      if(!(fuelAdded.includes(model.fuel))){
        let fuelBox = document.createElement("div");
        fuelBox.classList.add("colorBox");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("check");
        input.classList.add("fuelCheckBox");
        input.id = model.fuel;
        fuelBox.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = model.fuel;
        label.textContent = model.fuel;
        label.classList.add("model");
        fuelBox.appendChild(label);
        let fuels =document.getElementById("fuels");
        fuels.appendChild(fuelBox);
        fuelAdded.push(model.fuel);
      }
    })
  })
  return data;
}).then(function(data){
  let catAdded = [];
  data.forEach(function(mark){
    mark.models.forEach(function(model){
      if(!(catAdded.includes(model.category))){
        let catBox = document.createElement("div");
        catBox.classList.add("colorBox");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("check");
        input.classList.add("categoryCheckBox");
        input.id = model.category;
        catBox.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = model.category;
        label.textContent = model.category;
        label.classList.add("model");
        catBox.appendChild(label);
        let fuels =document.getElementById("cats");
        cats.appendChild(catBox);
        catAdded.push(model.category);
      }
    })
  })
  return data;
}).then(function(data){
  let yearAdded = [];
  data.forEach(function(mark){
    mark.models.forEach(function(model){
      if(!(yearAdded.includes(model.year))){
        let yearBox = document.createElement("div");
        yearBox.classList.add("colorBox");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("check");
        input.classList.add("yearCheckBox");
        input.id = model.year;
        yearBox.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = model.year;
        label.textContent = model.year;
        label.classList.add("model");
        yearBox.appendChild(label);
        let years =document.getElementById("years");
        years.appendChild(yearBox);
        yearAdded.push(model.year);
      }
    })
  })
  return data;
}).then(function(data){
  let seatAdded = [];
  data.forEach(function(mark){
    mark.models.forEach(function(model){
      if(!(seatAdded.includes(model.seats))){
        let seatBox = document.createElement("div");
        seatBox.classList.add("colorBox");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("check");
        input.id = model.seats;
        input.classList.add("seatCheckBox");
        seatBox.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = model.seats;
        label.textContent = model.seats;
        label.classList.add("model");
        seatBox.appendChild(label);
        let years =document.getElementById("years");
        seats.appendChild(seatBox);
        seatAdded.push(model.seats);
      }
    })
  })
  return data;
}).then(function(data){
  let autoAdded = [];
  data.forEach(function(mark){
    mark.models.forEach(function(model){
      let auto;
      if(model.automatic){
        auto = "Automatique";
      } else{
        auto = "Manuel";
      }
      if(!(autoAdded.includes(auto))){
        let autoBox = document.createElement("div");
        autoBox.classList.add("colorBox");
        let input = document.createElement("input");
        input.type = "checkbox";
        input.classList.add("check");
        input.classList.add("autoCheckBox");
        input.id = auto;
        autoBox.appendChild(input);
        let label = document.createElement("label");
        label.htmlFor = auto;
        label.textContent = auto;
        label.classList.add("model");
        autoBox.appendChild(label);
        let autoContainer = document.getElementById("auto");
        autoContainer.appendChild(autoBox);
        autoAdded.push(auto);
      }
    })
  })
  return data;
})



let marks = [];
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
        reserveButton.href = `carTemplate.php?id=${idCounter}`;
        idCounter++;
      }
      buttonRent.appendChild(reserveButton);
      buttonRent.appendChild(carPrice);

      carLabel.appendChild(carLabelTitle);
      carLabel.appendChild(carFooter);
      carLabel.appendChild(buttonRent);

      carCard.appendChild(carImage);
      carCard.appendChild(carLabel);
      carCard.classList.add("carCard", "col-lg-3", "col-md-6");
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
});



filterTitle.forEach(function(element){
  element.addEventListener("click", function(){
    modelList.classList.toggle("d-none");
    element.classList.toggle("borderBottom");
    modelList.classList.toggle("borderBottom");
    let arrow = element.querySelector(".fa-angle-down");
    arrow.classList.toggle("rotate");
  })
})


let filterTitlePrice = document.querySelectorAll(".filterTitlePrice");
let priceFilter = document.getElementById("priceFilter");
let range = document.getElementById("range");
filterTitlePrice.forEach(function(element){
  element.addEventListener("click", function(){
    priceFilter.classList.toggle("d-none");
    element.classList.toggle("borderBottom");
    priceFilter.classList.toggle("borderBottom");
    let arrow = element.querySelector(".fa-angle-down");
    arrow.classList.toggle("rotate");
  });
});


range.addEventListener("input", function(event){
  let prix = range.value;
  let prixDisplay = document.getElementById("prixRange");
  prixDisplay.textContent = `Prix Maximal: ${prix} DHS`;
})

let filterTitleColor = document.getElementById("filterTitleColor");
filterTitleColor.addEventListener("click", function(){
  let colorFilter = document.getElementById("colorFilter");
  colorFilter.classList.toggle("d-none");
  let arrow = document.getElementById("arrow");
  arrow.classList.toggle("rotate");
  colorFilter.classList.add("borderBottom");
  filterTitleColor.classList.toggle("borderBottom")
})

let filterTitleFuel = document.getElementById("filterTitleFuel");
filterTitleFuel.addEventListener("click", function(){
  let fuelFilter = document.getElementById("fuelFilter");
  fuelFilter.classList.toggle("d-none");
  let arrow = document.getElementById("arrow2");
  arrow.classList.toggle("rotate");
  fuelFilter.classList.add("borderBottom");
  filterTitleFuel.classList.toggle("borderBottom");
})

let filterTitleCat = document.getElementById("filterTitleCat");
filterTitleCat.addEventListener("click", function(){
  let catFilter = document.getElementById("catFilter");
  catFilter.classList.toggle("d-none");
  let arrow = document.getElementById("arrow3");
  arrow.classList.toggle("rotate");
  catFilter.classList.add("borderBottom");
  filterTitleCat.classList.toggle("borderBottom");
})

let filterTitleYear = document.getElementById("filterTitleYear");
filterTitleYear.addEventListener("click", function(){
  let yearFilter = document.getElementById("yearFilter");
  yearFilter.classList.toggle("d-none");
  let arrow = document.getElementById("arrow4");
  arrow.classList.toggle("rotate");
  yearFilter.classList.add("borderBottom");
  filterTitleYear.classList.toggle("borderBottom");
})

let filterTitleSeat = document.getElementById("filterTitleSeat");
filterTitleSeat.addEventListener("click", function(){
  let seatFilter = document.getElementById("seatFilter");
  seatFilter.classList.toggle("d-none");
  let arrow = document.getElementById("arrow5");
  arrow.classList.toggle("rotate");
  seatFilter.classList.add("borderBottom");
  filterTitleSeat.classList.toggle("borderBottom");
})

let filterTitleAuto = document.getElementById("filterTitleAuto");
filterTitleAuto.addEventListener("click", function(){
  let autoFilter = document.getElementById("autoFilter");
  autoFilter.classList.toggle("d-none");
  let arrow = document.getElementById("arrow6");
  arrow.classList.toggle("rotate");
})


let filterMobile = document.querySelector(".filterIconMobile");
let filters = document.querySelector(".filter");
if (document.body.clientWidth <= 992) {
  filterMobile.addEventListener("click", function(event) {
    filters.classList.toggle("d-none");
  });
}



//modele filter
window.onload = function() {
  let markCheckBoxes = document.querySelectorAll(".markBoxes");
  let carCards = document.querySelectorAll(".carCard");
  //modele filter
  markCheckBoxes.forEach(function(box) {
      box.addEventListener("change", function(event) {
          let checkedCars = []; 
          markCheckBoxes.forEach(function(checkbox) {
              if (checkbox.checked) {
                  checkedCars.push(checkbox.id); 
              }
          });
          carCards.forEach(function(card) {
              let cardMark = card.getAttribute("data-mark");
              if (checkedCars.includes(cardMark) || checkedCars.length === 0) {
                  card.style.display = "block"; 
              } 
              else {
                  card.style.display = "none"; 
              }
          });
      });
  });

  //searsh filter
  
  

    let searshBar = document.querySelector(".searshedCar");
    searshBar.addEventListener("input", function(event) {
    let wantedCar = searshBar.value.trim().toLowerCase(); 

    carCards.forEach(function(card) {
      let carMark = card.getAttribute("data-mark").toLowerCase(); 
      let carModel = card.getAttribute("data-model").toLowerCase(); 
      let carMarkModel = carMark + " " + carModel; 
      if (carMark.includes(wantedCar) || carModel.includes(wantedCar) || carMarkModel.includes(wantedCar) || wantedCar.length === 0) {
          card.style.display = "block";
      } else {
          card.style.display = "none"; 
      }
    });
});



  //Color filter
  let colorCheckBoxes = document.querySelectorAll(".colorCheckBox");
  colorCheckBoxes.forEach(function(box){
    box.addEventListener("change", function(event){
      let checkedColors = [];
      colorCheckBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedColors.push(checkbox.id);
        }
      });
      carCards.forEach(function(card){
        if(checkedColors.includes(card.getAttribute("data-color")) || checkedColors.length === 0){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })


  //fuel Filter
  let fuelCheckBoxes = document.querySelectorAll(".fuelCheckBox");
  fuelCheckBoxes.forEach(function(box){
    box.addEventListener("change", function(event){
      let checkedfuels = [];
      fuelCheckBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedfuels.push(checkbox.id);
        }
      });
      carCards.forEach(function(card){
        if(checkedfuels.includes(card.getAttribute("data-fuel")) || checkedfuels.length === 0){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })

  //categorie filter
  let categoryCheckBoxes = document.querySelectorAll(".categoryCheckBox");
  categoryCheckBoxes.forEach(function(box){
    box.addEventListener("change", function(event){
      let checkedcategorys = [];
      categoryCheckBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedcategorys.push(checkbox.id);
        }
      });
      carCards.forEach(function(card){
        if(checkedcategorys.includes(card.getAttribute("data-category")) || checkedcategorys.length === 0){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })

  //year filter
  let yearCheckBoxes = document.querySelectorAll(".yearCheckBox");
  yearCheckBoxes.forEach(function(box){
    box.addEventListener("change", function(event){
      let checkedyears = [];
      yearCheckBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedyears.push(checkbox.id);
        }
      });
      carCards.forEach(function(card){
        if(checkedyears.includes(card.getAttribute("data-year")) || checkedyears.length === 0){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })

   //siege filter
  let seatCheckBoxes = document.querySelectorAll(".seatCheckBox");
  seatCheckBoxes.forEach(function(box){
    box.addEventListener("change", function(event){
      let checkedseats = [];
      seatCheckBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedseats.push(checkbox.id);
        }
      });
      carCards.forEach(function(card){
        if(checkedseats.includes(card.getAttribute("data-seats")) || checkedseats.length === 0){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })

  //auto filter
  let autoCheckBoxes = document.querySelectorAll(".autoCheckBox");
  autoCheckBoxes.forEach(function(box){
    box.addEventListener("change", function(event){
      let checkedautos = [];
      autoCheckBoxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedautos.push(checkbox.id);
        }
      });
      carCards.forEach(function(card){
        if(checkedautos.includes(card.getAttribute("data-auto")) || checkedautos.length === 0){
          card.style.display = "block";
        } else{
          card.style.display = "none";
        }
      })
    })
  })


  //range filter
  let range = document.getElementById("range");
  range.addEventListener("change", function(event){
    let price = range.value;
    console.log(price);
    carCards.forEach(function(card){
      if(price > card.getAttribute("data-price")){
        card.style.display = "block"
      } else{
        card.style.display = "none";
      }
    })
  })


};






