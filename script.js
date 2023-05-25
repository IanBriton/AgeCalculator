"use strict";

//Selection of the form input
const form = document.querySelector("form");
const years = document.querySelector(".year");
const month = document.querySelector(".month");
const days = document.querySelector(".day");

//Variables to calcalute the year, month, and the day of a user
let userYears;
let userMonth;
let userDays;
let yearError = document.querySelector(".yearError");
let monthError = document.querySelector(".monthError");
let dayError = document.querySelector(".dayError");
let label = document.querySelectorAll("label");
let input = document.querySelectorAll("input");
const error = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const birthYear = form.year.value;
  const birthMonth = form.month.value;
  const birthDay = form.day.value;
  if (birthYear == "" || birthMonth == "" || birthDay == "") {
    label.forEach((element) => {
      element.style.color = "red";
    });
    input.forEach((element) => {
      element.style.outlineColor = "red";
    });
    error.forEach((err) => {
      err.classList.add("hidden");
    });

    years.textContent = "--" + " ";
    month.textContent = "--" + " ";
    days.textContent = "--" + " ";
    return;
  }
  if (birthYear > currentYear) {
    yearError.classList.add("hidden");
    yearError.style.color = "red";

    years.textContent = "--" + " ";
    month.textContent = "--" + " ";
    days.textContent = "--" + " ";
    return;
  }

  if (birthMonth > 12) {
    monthError.classList.add("hidden");
    monthError.style.color = "red";

    years.textContent = "--" + " ";
    month.textContent = "--" + " ";
    days.textContent = "--" + " ";
    return;
  }

  if (birthDay > getDaysInMonth(birthMonth, birthYear)) {
    dayError.classList.add("hidden");
    dayError.style.color = "red";
    years.textContent = "--" + " ";
    month.textContent = "--" + " ";
    days.textContent = "--" + " ";
    return;
  }

  userYears = currentYear - birthYear;
  userMonth = currentMonth - birthMonth;
  userDays = currentDay - birthDay;

  years.textContent = userYears + " ";
  month.textContent = userMonth + " ";
  days.textContent = userDays + " ";
});

//Function to get number of days in a month
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
