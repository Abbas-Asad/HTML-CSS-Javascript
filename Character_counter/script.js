let txt_val = document.querySelector("#txt-value");
let char_count = document.querySelector(".char-count");
txt_val.addEventListener("keyup", () => {
  let cut_space = txt_val.value.replace(/\s/g, "");
  char_count.textContent = cut_space.length;
});
