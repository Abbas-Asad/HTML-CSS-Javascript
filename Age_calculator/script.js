let input_date = document.querySelector("#input_date");
let today = new Date().toISOString().split("T")[0];

input_date.setAttribute("max", today);
document.querySelector("button").addEventListener("click", () => {
  let input_date_value = document.querySelector("#input_date").value;
  let age_result = document.querySelector("#age_result");

  // Birth Day
  let birth_day = new Date(input_date_value);
  let birth_year = birth_day.getFullYear();
  let birth_month = birth_day.getMonth(); //month starts from zero in javascript
  let birth_date = birth_day.getDate();
  console.log(`${birth_date} - ${birth_month} - ${birth_year} `);

  // Current Day
  let current_date = new Date();
  let year = current_date.getFullYear();
  let month = current_date.getMonth(); //month starts from zero in javascript
  let date = current_date.getDate();
  let yy = year - birth_year;
  let mm = month - birth_month;
  let dd = date - birth_date;

  if (!input_date_value) {
    age_result.textContent = "Please enter a valid date of birth.";
    return;
  } else {
    if (yy < 0) {
      yy = 0;
    } else if (mm < 0) {
      mm = 0;
    } else if (dd < 0) {
      dd = 0;
    }
    age_result.innerHTML = `Age:  ${yy} years,  ${mm} months,  ${dd} days`;
  }
});
