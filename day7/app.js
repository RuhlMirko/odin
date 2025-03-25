'use strict'
const section = document.querySelector('div')
/* Exercise 1

const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        console.log('Meow!');
    }
}
// above dont edit
const section = document.querySelector('div')
let catName = cat.name
cat.greeting()
cat.color = 'black'

// below dont edit
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `The cat's name is ${catName}.`;
para2.textContent = `The cat's color is ${cat.color}.`;

section.appendChild(para1);
section.appendChild(para2);
*/
/* Exercise 2
const band = {
    name: 'Soda Stereo',
    nationality: 'Argentina',
    genre: 'rock',
    members: 5,
    formed: 1982,
    split: 1997,
    albums: [
        {
            name: 'Signos',
            released: 1986
        },
        {
            name: 'Soda',
            released: 1984
        },
        {
            name: 'Doble vida',
            released: 1988
        },
        {
            name: 'Cancion Animal',
            released: 1990
        },
        {
            name: 'Me veras volver',
            released: 2008
        },

    ]
}


let bandInfo;

// Put your code here

bandInfo = `${band.name} was a popular latin-american ${band.genre} band founded in ${band.nationality} ${band.formed}-${band.split}, and their most listened albums were `

for (let i in band.albums) {
    bandInfo += `\n ${band.albums[i].name}(${band.albums[i].released}) - `
}

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
*/

const cat = {
    name: 'Bertie',
    breed: 'Cymric',
    color: 'white',
    greeting: function () {
        console.log('Meow!');
    }
}

const cat2 = {
    name: 'Bernie',
    breed: 'Maine',
    color: 'brown',
    greeting: function () {
        console.log(`Hello, said ${cat.name} the ${cat.breed}`);
    }
}


cat.greeting()
cat2.greeting()