let inp_link = document.querySelector("#inp_link");
let btn_redirect = document.querySelector(".btn_redirect");

btn_redirect.addEventListener("click", function () {
  if (inp_link.value.includes("https://") && inp_link.value.length >= 30) {
    window.location.href = "shorturl.html";
  } else if (
    inp_link.value.includes("https://") &&
    inp_link.value.length < 30
  ) {
    alert("Your url is already short");
  } else {
    alert("Please enter a valid url");
  }
});
