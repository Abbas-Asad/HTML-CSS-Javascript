let out_url = document.querySelector("#out_url");
let btn_copy_url = document.querySelector(".btn_copy_url");
let random_url = Math.floor(Math.random() * 1677721589646569).toString(16);
let url_suffix = random_url.slice(0, 5);
let short_url = `https://shorturl.at/${url_suffix}`;
out_url.value = short_url;
btn_copy_url.addEventListener("click", () => {
  navigator.clipboard.writeText(out_url.value);
  btn_copy_url.textContent = "Copied!";
});
