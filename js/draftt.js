
fetch("js/cars-data.json").then(
  function(result){
    return result.json();
  }
).then(
  function(data){
    data.forEach(function(car){
      let option = document.createElement("option");
      option.value = car.mark;
      option.text = car.mark;
      marque.appendChild(option); 
    })

    //find matched options
    marque.addEventListener("change", function(){
      modele.innerHTML = ``;
      let selectedMarque = marque.value;
      console.log(selectedMarque);

      let matchedCar = data.find(function(car){
        return car.mark === selectedMarque;
      })

      matchedCar.models.forEach(function(model){
        let modelOption = document.createElement("option");
        modelOption.text = model.model;
        modelOption.value = model.model;
        modele.appendChild(modelOption);
      })
    })
  }
)
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
  data.forEach(function(brand) {
    brand.models.forEach(function(model) {
      catLi.forEach(function(element){
        element.addEventListener("click", function(event){
          if(element.classList.contains("active")){
            let activeCat = element.dataset.category;
            console.log("Clicked category:", activeCat);
            if(activeCat === model.category || activeCat === "Tous"){
              let carCard = document.createElement("div");
              carCard.classList.add("carCard", "swiper-slide", "col-lg-3", "col-md-6");
              carCard.setAttribute("data-mark", brand.mark)

              let carImage = document.createElement("div");
              carImage.classList.add("carImage");
              let carImg = document.createElement("img");
              carImg.src = model.link;
              carImage.appendChild(carImg);

              let carLabel = document.createElement("div");
              carLabel.classList.add("carLabel");

              let carLabelTitle = document.createElement("div");
              carLabelTitle.classList.add("carLabelTitle");

              let carName = document.createElement("p");
              carName.classList.add("carName");
              carName.textContent = brand.mark + " " + model.model;

              let likeIcon = document.createElement("i");
              likeIcon.classList.add("fa-regular", "fa-heart", "like");

              carLabelTitle.appendChild(carName);
              carLabelTitle.appendChild(likeIcon);

              let carPrice = document.createElement("p");
              carPrice.classList.add("carPrice");
              carPrice.textContent = model.price + " Dhs/Jour";

              let carFooter = document.createElement("div");
              carFooter.classList.add("carFooter");

              let infoCar1 = document.createElement("div");
              infoCar1.classList.add("infoCar");
              let infoIcon1 = document.createElement("i");
              infoIcon1.classList.add("fa-solid", "fa-fire", "infoIcon");
              let info1 = document.createElement("span");
              info1.classList.add("info");
              info1.textContent = model.fuel;

              let infoCar2 = document.createElement("div");
              infoCar2.classList.add("infoCar");
              let infoIcon2 = document.createElement("i");
              infoIcon2.classList.add("fa-regular", "fa-calendar", "infoIcon");
              let info2 = document.createElement("span");
              info2.classList.add("info");
              info2.textContent = model.year;

              let infoCar3 = document.createElement("div");
              infoCar3.classList.add("infoCar");
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

              carLabel.appendChild(carLabelTitle);
              carLabel.appendChild(carPrice);
              carLabel.appendChild(carFooter);

              carCard.appendChild(carImage);
              carCard.appendChild(carLabel);
              carCard.style.width = "268px"
        
              cardWrapper.appendChild(carCard);
            } 
          } 
        })
        
        
      })
      
    });
  });
});
