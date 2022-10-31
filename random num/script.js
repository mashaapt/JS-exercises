let peoplesChoice = prompt('guess number');

for(let i = 0; i <= 10; i++) {
    if (peoplesChoice === i) {
        alert('good work');
    } else {
        alert('not matched');
    }
    break;
}