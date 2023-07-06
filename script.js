'use strict';

// Selecting elements
const btnGet = document.getElementById('get-leap-years');
const resultEl = document.getElementById('result');

// Declaring main variables
let startYearEl;
let endYearEl;
let leapYears = [];

const resetElements = function () {
  // Reseting values
  document.getElementById('start-year').value = 0;
  document.getElementById('end-year').value = 0;
  leapYears = [];
};

const showResult = function () {
  // Getting leap years
  let result = ``;
  for (let i = 0; i < leapYears.length; i++) {
    if (i < leapYears.length - 1) {
      result += leapYears[i] + ', ';
    } else {
      result += leapYears[i];
    }
  }

  if (leapYears.length !== 0) {
    // Creating HTML element
    resultEl.innerHTML = `<span>
      <b> There ${leapYears.length > 1 ? `are` : `is`} ${
      leapYears.length
    } leap ${
      leapYears.length > 1 ? `years` : `year`
    } between ${startYearEl} & ${endYearEl}</b>
    </span>
  <span> ${result} </span>`;
  } else {
    resultEl.innerHTML = `<span>
    <b> There is no leap year between ${startYearEl} &${endYearEl}
    </span>`;
  }
};

const checkLeapYear = function (year) {
  if (year % 4 === 0 && year !== 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        leapYears.push(year);
      }
    } else {
      leapYears.push(year);
    }
  }

  // Leap year is divisible by 4 and check if it not divisible  by 100 so it's leap year but if it divisible it maynot be leap year so check if it divisible by 400
};

const getRange = function () {
  for (let year = startYearEl; year <= endYearEl; year++) {
    checkLeapYear(year);
  }
};

btnGet.addEventListener('click', function () {
  // Initializing elements
  startYearEl = Number(document.getElementById('start-year').value);
  endYearEl = Number(document.getElementById('end-year').value);

  // Getting leap years
  getRange();
  showResult();

  // Reseting variables
  resetElements();
});
