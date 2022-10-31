for(let year = 2014; year <= 2050; year++) {
    let date = new Date(`1/1/${year}`);
    let isSunday = date.getDay() === 0;

    isSunday && console.log(`The 1st January of ${year} year is Sunday)`)
}
