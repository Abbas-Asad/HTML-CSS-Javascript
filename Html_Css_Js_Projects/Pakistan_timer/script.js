let cont = document.querySelector(".container");
let para = document.querySelector("p");
function currentTime() {
  let current_date = new Date();
  let hours = String(current_date.getHours()).padStart(2, "0");

  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  let minutes = String(current_date.getMinutes()).padStart(2, "0");
  let seconds = String(current_date.getSeconds()).padStart(2, "0");
  let date = String(current_date.getDate()).padStart(2, "0");
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = monthNames[current_date.getMonth()]; //month starts from zero in javascript
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayNames[current_date.getDay()];
  let year = current_date.getFullYear();
  para.innerHTML = `Pakistan Time: <span>${hours}:${minutes}:${seconds} ${ampm}</span><br>
          Today's Date: <span>${date} ${month} ${year}</span><br>
          Day of the Week: <span>${day}</span>`;
}
setInterval(currentTime, 1000);
