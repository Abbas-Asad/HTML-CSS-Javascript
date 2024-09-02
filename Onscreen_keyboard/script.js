let buttons = document.querySelectorAll(".btn");
let input_area = document.querySelector("input");
let delete_btn = document.querySelector(".delete");
let space_btn = document.querySelector(".space");
let shift_btn = document.querySelector(".shift");

let chars = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    input_area.value += btn.innerText;
    chars = input_area.value.split("");
    console.log(chars);
  });
});

delete_btn.addEventListener("click", () => {
  chars.pop();
  input_area.value = chars.join("");
});

space_btn.addEventListener("click", () => {
  chars.push(" ");
  input_area.value = chars.join("");
});

shift_btn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.innerText =
      btn.innerText === btn.innerText.toUpperCase()
        ? btn.innerText.toLowerCase()
        : btn.innerText.toUpperCase();
  });
});
