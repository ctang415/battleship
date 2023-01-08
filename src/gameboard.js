const Ship = require('./ship')

const gameBoard = () => {
    const missedAttacks = []
    const listOfShips = []
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
    const placeShip = (ship, div, coordinates) => {
        listOfShips.push(ship)
        for (const coordinate of coordinates) {
            div.occupy = ship
            div.hit = false
            for (let i = 0; i < coordinates.length; i++) {
                ship.changeCoordinate(i, coordinate)
        }
    }
}
    const receiveAttack = (div, coordinate) => {
        if (div.occupy == 'empty' && div.hit == false) {
            missedAttacks.push(coordinate)
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
    const reportShips = () => {
        const isTrue = (element) => element.isSunk() == true
        if(listOfShips.every(isTrue)) {
            return "all ships sunk"
        } else if (!listOfShips.every(isTrue)) {
        return "not all ships sunk"
        }
    }
    return { placeShip, showBoard, receiveAttack, reportShips }
}

module.exports = gameBoard