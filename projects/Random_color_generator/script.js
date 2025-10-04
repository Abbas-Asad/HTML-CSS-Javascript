let btn_col_chng = document.querySelector(".btn-col-chng");
let para = document.querySelector(".p");
btn_col_chng.addEventListener("click", () => {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  para.textContent = randomColor;
});
