const Gameboard = () => {
    const missedAttacks = []
    const listOfShips = []
    const reportLength = () => listOfShips.length
    const showBoard = (ship, coordinates) => {
        for (const coordinate of coordinates) {
            for (let i = 0; i < coordinates.length; i++) { 
        if (coordinate == ship.getArray()[i].xy.toString()) {
            return "set"
        }
    }
}
    }
    const placeShip = (ship, coordinate, direction) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (direction == 'horizontal') {
            if (yChange + (ship.getLength-1) < 10) {
                listOfShips.push(ship)
                ship.changeCoordinate(coordinate)
            }
        } else {
            if (xChange + (ship.getLength-1) < 10) {
                listOfShips.push(ship)
                ship.changeCoordinate(coordinate)
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
    return { placeShip, showBoard, receiveAttack, reportShips, reportLength }
}

module.exports = Gameboard