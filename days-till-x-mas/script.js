//new year

// // let oneDay = 1000 * 60 * 60 * 24;

// let today = new Date();

// let newYearDay = new Date(today.getFullYear(), 12, 31);
// let final;
// // let result = Math.round(newYearDay.getTime() - today.getTime()) / (oneDay);
// function result(days) {
//     newYearDay - today === final;
// }
// // let final = result.toFixed(0);
// console.log(final);


// // document.write(`Days before X-mas: ${final}`);

let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 12 && today.getDate() > 31) {
  christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 12, 31);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.floor(
  (christmasDate.getTime() - today.getTime()) /
   (dayMilliseconds)
);
console.log(remainingDays)


//xmas

// let today = new Date();
// let christmasYear = today.getFullYear();

// if (today.getMonth() == 11 && today.getDate() > 25) {
//   christmasYear = christmasYear + 1;
// }

// let christmasDate = new Date(christmasYear, 11, 25);
// let dayMilliseconds = 1000 * 60 * 60 * 24;

// let remainingDays = Math.ceil(
//   (christmasDate.getTime() - today.getTime()) /
//    (dayMilliseconds)
// );