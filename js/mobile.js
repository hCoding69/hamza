let toogler = document.querySelector(".toogler");
let navside = document.querySelector(".navside");
toogler.addEventListener("click", function(event){
  navside.classList.toggle("d-none");
})
document.addEventListener('DOMContentLoaded', function() {
  let lists = document.querySelectorAll(".list");

  let width = window.innerWidth;
  lists.forEach(function(li) {
    if (width <= 1669) {
      li.classList.remove("row");
    } else {
      li.classList.add("row");
    }
  });

  // Check the class on window resize
  window.addEventListener("resize", function() {
    let width = window.innerWidth;
    lists.forEach(function(li) {
      if (width <= 1669) {
        li.classList.remove("row");
      } else {
        li.classList.add("row");
      }
    });
  });
});