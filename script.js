//your JS code here. If required.
function daysOfAYear(year) {
  // A leap year is divisible by 400 OR (divisible by 4 and NOT divisible by 100)
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return 366;
  }
  return 365;
}