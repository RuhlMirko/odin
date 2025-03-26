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
/* Exercise 3
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
*/
/* Exercise 4
function Cat(name, breed, color) {
    this.name = name
    this.breed = breed
    this.color = color
    this.greeting = function () {
        console.log(`Hello, said ${this.name} the ${this.breed}`);
    }
}


const cat1 = new Cat('Bertie', 'Cymric', 'white')
const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger')

cat1.greeting();
cat2.greeting();
*/

/* Array methods exercises
const camelize = function (str) {
    const newString = []
    const splited = str.split('-')
    for (let index in splited) {
        if (index != 0) {
            var cameled = splited[index].slice(0, 1).toUpperCase()
            cameled = cameled + splited[index].slice(1)
            newString.push(cameled)
        }
        else {
            newString.push(splited[0])
        }
    }
    return newString.join('')
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize('-webkit-transition'))
*/
/* Array exercise 2
const filterRange = function (arr, minValue, maxValue) {
    const newArr = []
    for (let item of arr) {
        if (item >= minValue && item <= maxValue) {
            newArr.push(item)
        }
    }
    return newArr
}

let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
alert(filtered)
alert(arr)
*/
/* Array exercise 3
function filterRangeInPlace(arr, minValue, maxValue) {
    for (let [index, item] of arr.entries()) {
        if (item < minValue || item > maxValue) {
            arr.splice(index, 1);
        }
    }
}


let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
console.log(arr);
//*/

//

const copySorted = function (arr) {
    const newArr = arr.slice().sort()
    return newArr
}

let arr = ['HTML', 'JavaScript', 'CSS']
let sorted = copySorted(arr)

console.log(sorted, arr);


