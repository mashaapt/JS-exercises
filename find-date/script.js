const dayWeek = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()];
// let calcYear = (day.getDay() - 5) + (day.getMonth() - 10) + (day.getFullYear() - 4);

// let getSun = day + calcYear;

// console.log(getSun);

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);

if (day)