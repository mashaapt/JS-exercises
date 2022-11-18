// Write a JavaScript program to check 
// two given numbers and return true if 
// one of the number is 50 or if their sum is 50. 

let urNum1 = +prompt('Put the num 1');
let urNum2 = +prompt('Put the num 2');


// if ((urNum1 || urNum2 === 50) || urNum1 + urNum2 === 50) {
//     console.log('true');
// } else {
//     alert('you failed');
// }

if ((urNum1 == 50 || urNum2 == 50) || (urNum1 + urNum2 == 50)) {
    console.log('true')
} else {
    alert('you failed');
}