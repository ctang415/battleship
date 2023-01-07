const Ship = require('./ship')

const gameBoard = () => {
    const createBoard = (row, col) => {
        const container = document.querySelector('.container')
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                const div = document.createElement('div')
                div.setAttribute('data-id', [i,j])
                div.setAttribute('occupied', null)
            }
            container.appendChild(div)
        }
    }
    const showBoard = (ship, coordinates) => {
        for (const coordinate of coordinates) {
            for (let i = 0; i < coordinates.length; i++) { 
        if (coordinate == ship.getArray()[i].xy.toString()) {
            return "set"
        }
    }
}
    }
    const placeShip = (ship, coordinates) => {
        for (const coordinate of coordinates) {
            for (let i = 0; i < coordinates.length; i++) {
                ship.changeCoordinate(i, coordinate)
        }
    }
}
    const receiveAttack = (div, coordinate) => {
        if (div.occupy == 'empty' && div.hit == false) {
            return "miss"
        } else if (div.occupy !== 'empty' && div.hit == false) {
            div.hit = 1
            let ship = div.occupy
            ship.isHit(coordinate)
             return "hit"
        } else if (div.occupy !== 'empty' && div.hit == true) {
            return "already hit"
        }
    }
    return { placeShip, showBoard, receiveAttack }
}

module.exports = gameBoard