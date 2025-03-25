'use strict'

const container = document.querySelector('#table')
const userBtn = document.querySelector('button')
let height = 16
let width = 16
let pixelFrame = ''

const createSketch = function () {
    pixelFrame = document.createElement('div')
    container.appendChild(pixelFrame)

    // Creates a row div element to contain the squares in a flex container
    for (let j = 0; j < height; j++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'row')
        pixelFrame.appendChild(row)
        // Makes the squares
        for (let i = 0; i < width; i++) {
            const newPixel = document.createElement('div')
            newPixel.setAttribute('class', 'square')
            newPixel.addEventListener('mouseover', (hover) => {
                hover.target.style.backgroundColor = '#000'
            })
            row.appendChild(newPixel)
        }
    }
}

userBtn.addEventListener('click', function () {
    width = height = Number(prompt('Enter the desired width'))
    container.removeChild(pixelFrame)
    createSketch()
})

createSketch()

