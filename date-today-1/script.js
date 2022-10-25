let today = new Date();
let day = String(today.getDate()).padStart(2, '0');
let month = String(today.getMonth()).padStart(2, '0');
let year = today.getFullYear();

today = day + '/' + month + '/' + year;
document.write(today);