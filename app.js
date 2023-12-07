let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Function to handle navigation clicks
// function navigateToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//     }
// }

// Event listeners for navigation clicks
// document.getElementById("nav-offer").addEventListener("click", function () {
//     navigateToSection("offer");
// });

// document.getElementById("nav-specialties").addEventListener("click", function () {
//     navigateToSection("specialties");
// });

// document.getElementById("nav-gallery").addEventListener("click", function () {
//     navigateToSection("gallery-section");
// });

// document.getElementById("nav-contact-us").addEventListener("click", function () {
//     navigateToSection("contact");
// });