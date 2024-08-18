let parametre = document.querySelectorAll(".comtactForm .txt");
let envoyer = document.getElementById("envoyer");
let erreur = document.getElementById("erreur");
envoyer.addEventListener("click", function(event){
  parametre.forEach(function(element){
    if(element.value.length === 0){
      erreur.classList.remove("d-none");
      event.preventDefault();
    }
    else{
      erreur.classList.add("d-none");
    }
  })
})