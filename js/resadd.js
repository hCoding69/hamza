let inputs = document.querySelectorAll(".rn");
let form = document.querySelector(".formw");
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
    console.log(pickDate - dropDate);
  }
  if(pickDate <= today){
    event.preventDefault();
    alrt3.classList.remove("d-none");
  }

})
let drop, pick, diff, diffDays, cp, tp;
let cpt = document.querySelector(".cp");
let pi = document.querySelector(".xxx");
let img = document.querySelector(".imh");
let car = document.querySelector(".marque");
let carname = document.querySelector(".carName");
let ii = document.querySelector(".carid");
let tot = document.querySelector(".tot");
let options = document.querySelector(".optionsSummary");
let checkboxes = document.querySelectorAll(".check");
let opt = document.querySelector(".op");
let stringed = [];
let op = 0;
let price = 0;

// Initial setup
let selectedCar = car.options[car.selectedIndex];
let link = selectedCar.dataset.link;
let carid = selectedCar.dataset.id;
price = parseInt(selectedCar.dataset.price);

img.setAttribute("src", `${link}`);
carname.textContent = selectedCar.text;
ii.setAttribute("value", carid);
console.log(`Price: ${price}, Car ID: ${carid}`);

dp.addEventListener("change", function(event) {
  drop = new Date(dp.value);
  if (drop && pick) {
    diff = Math.abs(drop - pick);
    diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    console.log(diffDays);
    let days = document.querySelector(".days");
    days.textContent = `${diffDays} jours de reservations`;
    cp = price * diffDays;
    cpt.textContent = `${cp} MAD`;
    tp = cp + op;
    tot.textContent = `${tp} MAD`;
    pi.setAttribute("value", tp);
  }
});

dd.addEventListener("change", function(event) {
  pick = new Date(dd.value);
  if (drop && pick) {
    diff = Math.abs(drop - pick);
    diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    console.log(diffDays);
    let days = document.querySelector(".days");
    days.textContent = `${diffDays} jours de reservations`;
    cp = price * diffDays;
    cpt.textContent = `${cp} MAD`;
    tp = cp + op;
    tot.textContent = `${tp} MAD`;
    pi.setAttribute("value", tp);
  }
});

car.addEventListener("change", function(event) {
  selectedCar = car.options[car.selectedIndex];
  link = selectedCar.dataset.link;
  carid = selectedCar.dataset.id;
  price = parseInt(selectedCar.dataset.price);

  img.setAttribute("src", `${link}`);
  carname.textContent = car.value;
  ii.setAttribute("value", carid);
  console.log(price);
  console.log(carid);

  if (drop && pick) {
    diff = Math.abs(drop - pick);
    diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    cp = price * diffDays;
    cpt.textContent = `${cp} MAD`;
    tp = cp + op;
    tot.textContent = `${tp} MAD`;
    pi.setAttribute("value", tp);
  }
});

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener("change", function(event) {
    if (checkbox.type === "radio") {
      let prevRadio = document.querySelector(`.detail.radio-${checkbox.name}`);
      if (prevRadio) {
        options.removeChild(prevRadio);
        let i = stringed.indexOf(prevRadio.querySelector(".item").textContent);
        if (i !== -1) stringed.splice(i, 1);
        op -= parseInt(checkbox.value * diffDays);
        tp = op + cp;
        tot.textContent = `${tp} MAD`;
        pi.setAttribute("value", tp);
      }
    }
    if (checkbox.checked) {
      let divv = document.createElement("div");
      divv.classList.add("detail");
      if (checkbox.type === "radio") {
        divv.classList.add(`radio-${checkbox.name}`);
      }
      divv.innerHTML = `<p class="item">${checkbox.id}</p>
                        <p class="itemPrice">${checkbox.value} MAD</p>`;
      stringed.push(checkbox.id);
      options.appendChild(divv);
      checkbox.divv = divv;
      op += parseInt(checkbox.value * diffDays);
      tp = op + cp;
      tot.textContent = `${tp} MAD`;
      pi.setAttribute("value", tp);
      opt.setAttribute("value", stringed.join(" | "));
    } else {
      if (checkbox.divv) {
        options.removeChild(checkbox.divv);
        checkbox.divv = null;
        op -= parseInt(checkbox.value * diffDays);
        tp = op + cp;
        tot.textContent = `${tp} MAD`;
        pi.setAttribute("value", tp);
        let i = stringed.indexOf(checkbox.id);
        if (i !== -1) stringed.splice(i, 1);
        opt.setAttribute("value", stringed.join(" | "));
      }
    }
  });
});
