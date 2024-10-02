let input_date = document.querySelector("#input_date");
let today = new Date().toISOString().split("T")[0];

input_date.setAttribute("max", today);
document.querySelector("button").addEventListener("click", () => {
  let input_date_value = document.querySelector("#input_date").value;
  let age_result = document.querySelector("#age_result");

  // Birth Day
  let birth_day = new Date(input_date_value);
  let birth_year = birth_day.getFullYear();
  let birth_month = birth_day.getMonth();
  let birth_date = birth_day.getDate();

  // Current Day
  let current_date = new Date();
  let year = current_date.getFullYear();
  let month = current_date.getMonth();
  let date = current_date.getDate();

  if (!input_date_value) {
    age_result.textContent = "Please enter a valid date of birth.";
    return;
  }

  let yy = year - birth_year;
  let mm = month - birth_month;
  let dd = date - birth_date;

  if (dd < 0) {
    mm--;
    let daysInPrevMonth = new Date(year, month, 0).getDate();
    dd += daysInPrevMonth;
  }

  if (mm < 0) {
    yy--;
    mm += 12;
  }

  age_result.innerHTML = `Age: ${yy} years, ${mm} months, ${dd} days`;
});
