'use strict'

const container = document.querySelector('#table')
const height = 16
const width = 16

// Creates a row div element to contain the squares in a flex container
for (let j = 0; j < height; j++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    container.appendChild(row)
    // Makes the squares
    for (let i = 0; i < width; i++) {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'square')
        newDiv.addEventListener('mouseover', (hover) => {
            hover.target.style.backgroundColor = '#000'
        })
        row.appendChild(newDiv)
    }
}


