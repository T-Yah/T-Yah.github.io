// Get the modal and images
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");

// Get all images with the class "enlarge"
var images = document.querySelectorAll(".dream img");

// Attach click event to each image
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

// Close the modal when the "x" is clicked
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
  modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// let slideIndex = 1;
// showSlides(slideIndex);

// // Function to show the previous or next slide
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Function to show a specific slide
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// // Function to update the modal image based on the current slide index
// function showSlides(n) {
//   var slides = document.getElementsByClassName("dream");
  
//   // Handle wrap-around when reaching the first or last slide
//   if (n > slides.length) {
//     slideIndex = 1;
//   } else if (n < 1) {
//     slideIndex = slides.length;
//   }

//   // Update modal image
//   modalImg.src = slides[slideIndex - 1].getElementsByTagName("img")[0].src;
// }

// // Add event listeners for previous and next arrows
// document.getElementById("prev").addEventListener("click", function() {
//   plusSlides(-1);
// });

// document.getElementById("next").addEventListener("click", function() {
//   plusSlides(1);
// });
// =======================================================================================================
// Get all images within elements with the class "dream"
// var dreamDivs = document.querySelectorAll(".dream");
// var images = [];

// // Concatenate the first image of each "dream" element into a single list
// dreamDivs.forEach(function (dream) {
//     var dreamImage = dream.querySelector("img");
//     if (dreamImage) {
//         images.push(dreamImage);
//     }
// });

// // Get the modal and images
// var modal = document.getElementById("myModal");
// var modalImg = document.getElementById("modalImage");

// // Close the modal when the "x" is clicked
// var span = document.getElementsByClassName("close")[0];
// span.onclick = function () {
//     modal.style.display = "none";
// };

// // Close the modal when clicking outside the image
// window.onclick = function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// };

// let slideIndex = 0;
// showSlides();

// // Function to show the next slide
// function showSlides() {
//     // Increment slide index
//     slideIndex++;

//     // Handle wrap-around when reaching the last image of each "dream" element
//     if (slideIndex > images.length * dreamDivs.length) {
//         slideIndex = 1;
//     }

//     // Calculate the index within the current "dream" element
//     var dreamIndex = Math.ceil(slideIndex / images.length);

//     // Update modal image
//     modalImg.src = images[(slideIndex - 1) % images.length].src;

//     // Automatically advance to the next slide after a delay (adjust as needed)
//     setTimeout(showSlides, 2000); // Adjust the delay (in milliseconds) between slides
// }

// // Attach click event to open the modal on image click
// images.forEach(function (img) {
//     img.onclick = function () {
//         modal.style.display = "block";
//         modalImg.src = this.src;
//     };
// });