let big = document.querySelector(".bbe");
let small= document.querySelector(".sbe");
let ssquare= document.querySelector(".sse");
let bsquare= document.querySelector(".bse");
ssquare.addEventListener("click", function(event){
  small.click();
})

bsquare.addEventListener("click", function(event){
  big.click();
})