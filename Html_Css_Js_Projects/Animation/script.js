const body = document.body;
const box = document.querySelector(".box");
const para = document.querySelector("p");

// Function to start animation
function startAnimation() {
  body.style.animationPlayState = "running";
  box.style.animationPlayState = "running";
  para.style.animationPlayState = "running";
}

// Function to stop animation
function stopAnimation() {
  body.style.animationPlayState = "paused";
  box.style.animationPlayState = "paused";
  para.style.animationPlayState = "paused";
}
