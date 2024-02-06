let slideIndex = 1;

// Function to display slides
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

// Function to increment slide index
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to set current slide index
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to automatically change slides
function autoSlide() {
  plusSlides(1);
  setTimeout(autoSlide, 8000); // Change image every 8 seconds
}

// Start auto slideshow
autoSlide();

// Add event listeners to the slideshow container
document.getElementById("mySlideShow").addEventListener("click", function (event) {
  let x = event.clientX;
  let containerWidth = this.offsetWidth;
  
  // Calculate the clicked position within the container
  let clickX = x - this.getBoundingClientRect().left;

  // If clicked on the left half of the container, go to the previous slide
  // If clicked on the right half of the container, go to the next slide
  if (clickX < containerWidth / 2) {
    plusSlides(-1);
  } else {
    plusSlides(1);
  }
});
