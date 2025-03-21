'use strict'

const outputDiv = document.querySelector('.output');
let counter = 10

function countDownP() {
    const p = document.createElement('p');
    if (counter === 0) {
        p.textContent = 'Blast off!';
        outputDiv.appendChild(p);
        clearInterval(intervalId);
    }
    else if (counter === 10) {
        p.textContent = 'Countdown 10';
        outputDiv.appendChild(p);
    }
    else {
        p.textContent = counter;
        outputDiv.appendChild(p);
    }
    counter--;
}



var intervalId = setInterval(countDownP, 1000);