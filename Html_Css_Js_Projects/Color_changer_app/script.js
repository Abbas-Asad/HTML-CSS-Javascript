let inp_col = document.querySelector("#inp-col");
let btn_col_chng = document.querySelector(".btn-col-chng");
btn_col_chng.addEventListener("click", () => {
  document.body.style.backgroundColor = inp_col.value;
});
