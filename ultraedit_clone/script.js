function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("show");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollUpButton = document.getElementById("scrollUp");

  // Show the button when the user scrolls down 100px from the top of the document
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollUpButton.style.display = "flex";
  } else {
    scrollUpButton.style.display = "none";
  }
}

document.getElementById("scrollUp").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
