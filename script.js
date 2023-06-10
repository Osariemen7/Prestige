// const form = document.querySelector(".contact")
// form.addEventListener('submit', function(e) {
//   e.preventDefault()
   
//   const email = document.querySelector(".email")
//   const body = document.querySelector(".body")
//   Email.send({
//   SecureToken : "f9efbc8c-6e15-4116-94e9-859727d9b877",
//   To : 'info@prestigefinance.co',
//   From : email.value,
//   Subject : "Prestige Contact",
//   Body : body.value
// }).then(
// message => alert(message)
// )
// });



function openNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");
  }
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail slide controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


