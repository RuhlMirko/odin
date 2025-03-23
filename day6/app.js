'use strict'

const container = document.querySelector('#table')
const height = 16
const width = 16


for (let j = 0; j < height; j++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row')
    container.appendChild(row)
    for (let i = 0; i < width; i++) {
        const newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'square')
        row.appendChild(newDiv)
    }
}


