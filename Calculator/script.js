let btns = document.querySelectorAll(".btn");
let textarea = document.querySelector(".txtarea");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn.textContent === "C") {
      textarea.value = "";
    } else if (btn.textContent === "=") {
      textarea.value = eval(textarea.value);
    } else {
      textarea.value += btn.textContent;
    }
  })
);
