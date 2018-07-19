var map = document.querySelector(".map");
var map_img = map.querySelector("img");
var map_full = map.querySelector(".map-full");

var overlay = document.querySelector(".modal-overlay");



map_img.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_full.classList.add("modal-show");
  overlay.classList.add("overlay-show");
});



overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  map_full.classList.remove("modal-show");
  overlay.classList.remove("overlay-show");
});


window.addEventListener("keydown", function (evt) {
  
  if (evt.keyCode===27) {
    evt.preventDefault();
    if (map_full.classList.contains("modal-show")) {
      map_full.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});


                     
                     
