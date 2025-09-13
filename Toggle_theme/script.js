let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", () => {
  document.documentElement.style.setProperty("--bgcolor", "#f8f9fa");
  document.documentElement.style.setProperty("--txtcolor", "#343a40");
  document.documentElement.style.setProperty("--body-bgcolor", "#e9ecef");
});

btn2.addEventListener("click", () => {
  document.documentElement.style.setProperty("--bgcolor", "#a6fff0");
  document.documentElement.style.setProperty("--txtcolor", "darkblue");
  document.documentElement.style.setProperty("--body-bgcolor", "#f6f8f9");
});

btn3.addEventListener("click", () => {
  document.documentElement.style.setProperty("--bgcolor", "#1b3a57");
  document.documentElement.style.setProperty("--txtcolor", " white");
  document.documentElement.style.setProperty("--body-bgcolor", "#e1edf7");
});
