'use strict'
const admitList = document.getElementById('admitList');
const refuseList = document.getElementById('refuseList');
const peopleList = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce']


for (let person of peopleList) {
    if (person === 'Phil' || person === 'Lola') {
        refuseList.innerHTML += `<li>${person}</li>`;
    }
    else {
        admitList.innerHTML += `<li>${person}</li>`;
    }
}

