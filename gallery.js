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
