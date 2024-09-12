let start_voice = document.querySelector(".start_voice");
let stop_voice = document.querySelector(".stop_voice");
let input_text = document.querySelector(".inp_txt");

start_voice.addEventListener("click", () => {
  let speech = new SpeechSynthesisUtterance(input_text.value);
  window.speechSynthesis.speak(speech);
});
stop_voice.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
