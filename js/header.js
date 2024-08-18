let ind = document.querySelector(".ind");
let com = document.querySelector(".com");
let re = document.querySelector(".re");
let sa = document.querySelector(".sa");
let ai = document.querySelector(".ai");
let links = document.querySelectorAll(".nav-link");

if(location.pathname === "/index.php"){
  links.forEach(function(link){
    link.classList.remove("color");
  });
  ind.classList.add("color");
} else if(location.pathname === "/comparaison.php"){
  links.forEach(function(link){
    link.classList.remove("color");
  });
  com.classList.add("color");
} else if(location.pathname === "/reservation.php"){
  links.forEach(function(link){
    link.classList.remove("color");
  });
  re.classList.add("color");
} else if(location.pathname === "/saves.php"){
  links.forEach(function(link){
    link.classList.remove("color");
  });
  sa.classList.add("color");
} else if(location.pathname === "/faq.php"){
  links.forEach(function(link){
    link.classList.remove("color");
  });
  ai.classList.add("color");
}
