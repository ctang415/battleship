const Ship = require('./ship')

const Gameboard = () => {
    const missedAttacks = []
    const listOfShips = []
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
            div.hit = true
            let ship = div.occupy
            ship.isHit(coordinate)
             return "hit"
        } else {
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

module.exports = Gameboard