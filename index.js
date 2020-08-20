const openButton = document.getElementById("open-modal");
const modalOverlay = document.getElementById("overlay");
const closeButton = document.getElementById("close-button");

openButton.addEventListener("click", function () {
  modalOverlay.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modalOverlay.style.display = "none";
});
