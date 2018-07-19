var modal = document.querySelector(".feedback-popup");
var add_but = document.querySelector(".address-button");
var close_but = modal.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var in_name = modal.querySelector("[name=fb-name]");
var in_email = modal.querySelector("[name=fb-email]");
var form = modal.querySelector("form");

var isStorageSupport = true;
var storage = "";
  
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

add_but.addEventListener("click", function (evt) {
  evt.preventDefault();
  
  modal.classList.add("modal-show-anim");
  overlay.classList.add("overlay-show");
  

  
 if (storage) {
    in_name.value = storage;                    /*кажется это не работает*/
    in_email.focus();
  }
  else {
  in_name.focus();
  }
});


close_but.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show-anim");
  overlay.classList.remove("overlay-show");
  
  if (in_name.classList.contains("input-error")) {
    in_name.classList.remove("input-error");
  }

  if (in_email.classList.contains("input-error")) {
    in_email.classList.remove("input-error");
  }
});



overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show-anim");
  overlay.classList.remove("overlay-show");
  
  if (in_name.classList.contains("input-error")) {
    in_name.classList.remove("input-error");
  }

  if (in_email.classList.contains("input-error")) {
    in_email.classList.remove("input-error");
  }
});


in_name.addEventListener("click", function(evt) {
     if (in_name.classList.contains("input-error")) {
    in_name.classList.remove("input-error");
  } });


in_email.addEventListener("click", function(evt) {
     if (in_email.classList.contains("input-error")) {
    in_email.classList.remove("input-error");
  }});




window.addEventListener("keydown", function (evt) {
 
  if (evt.keyCode===27) {
     evt.preventDefault();
    if (modal.classList.contains("modal-show-anim")) {
      modal.classList.remove("modal-show");
      overlay.classList.remove("overlay-show");
    }
  }
});



form.addEventListener("submit", function(evt) {
  
   if (!in_name.value||!in_email.value) {
     evt.preventDefault();
     if (!in_name.value) {
       in_name.classList.add("input-error");
     }
     if (!in_email.value) {
       in_email.classList.add("input-error");
     }
   }
  else 
    {
    if (isStorageSupport) {
     localStorage.setItem("in_name",in_name.value);
    }
   } 
  
});
                     
                     
