const Gameboard = () => {
    const missedAttacks = []
    const listOfShips = []
    const boardProperties = {shipHit: false, shipCoordinate: null}
    const shipHit = () => boardProperties.shipHit
    const shipCoordinate = () => boardProperties.shipCoordinate
    const getMissingCoordinates = () => missedAttacks.length
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
    const placeShip = (ship, coordinate, direction, player) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (player.getPlace() == true) {
            if (direction == 'horizontal') {
                if (yChange + (ship.getLength()-1) < 10) {
                    for (let i = 0; i < ship.getLength(); i++) {
                        const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                        if (myDiv.getAttribute('occupied') == 'empty') {
                            yChange++;
                        } else {
                            return placeShip(ship, player.makeRandomMove(), ship.getDirection(), player)
                        }
                    }
                    if (listOfShips.includes(ship) == false) {
                        listOfShips.push(ship)
                    }
                    ship.changeCoordinate(coordinate)
                    yChange = coordinate[1]
                    for (let i = 0; i < ship.getLength(); i++) {
                        const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                        theDiv.setAttribute('occupied', ship.myName)
                        yChange++;
                    }
            } else {
                return placeShip(ship, player.makeRandomMove(), ship.getDirection(), player)
            }
            } else if (direction == 'vertical') {
                if (xChange + (ship.getLength()-1) < 10) {
                    for (let i = 0; i < ship.getLength(); i++) {
                        const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                        if (myDiv.getAttribute('occupied') == 'empty') {
                            xChange++;
                        } else {
                            return placeShip(ship, player.makeRandomMove(), ship.getDirection(), player)
                        }
                    }
                    if (listOfShips.includes(ship) == false) {
                        listOfShips.push(ship)
                    }
                    ship.changeCoordinate(coordinate)
                    xChange = coordinate[0]
                    for (let i = 0; i < ship.getLength(); i++) {
                        const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                        theDiv.setAttribute('occupied', ship.myName)
                        xChange++;
                    }
                } else {
                    return placeShip(ship, player.makeRandomMove(), ship.getDirection(), player)
                }
            }
        } else if (player.getPlace() !==  true) {
            if (direction == 'horizontal') {
                if (yChange + (ship.getLength()-1) < 10) {
                    for (let i = 0; i < ship.getLength(); i++) {
                        const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                        if (myDiv.getAttribute('occupied') == 'empty' || myDiv.getAttribute('occupied') == ship.shipName) {
                            yChange++
                        } else {
                            return placeShip(ship, ship.getArray()[0].xy, ship.getDirection(), player)
                        }
                    }
                    if (listOfShips.includes(ship) == false) {
                        listOfShips.push(ship)
                    }
                        ship.changeCoordinate(coordinate)
                        yChange = coordinate[1]
                        for (let i = 0; i < ship.getLength(); i++) {
                            const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                            theDiv.setAttribute('occupied', ship.myName)
                            theDiv.draggable = true;
                            theDiv.className = 'divtwo'
                            yChange++;
                        }
                    }
                    else {
                        return placeShip(ship, ship.getArray()[0].xy, ship.getDirection(), player)
                     }
            } else if (direction == 'vertical') {
                if (xChange + (ship.getLength()-1) < 10) {
                    for (let i = 0; i < ship.getLength(); i++) {
                        const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                        if (myDiv.getAttribute('occupied') == 'empty' || myDiv.getAttribute('occupied') == ship.shipName) {
                            xChange++
                        } else {
                            return placeShip(ship, ship.getArray()[0].xy, ship.getDirection(), player)
                        }
                    }
                    if (listOfShips.includes(ship) == false) {
                        listOfShips.push(ship)
                    }
                        ship.changeCoordinate(coordinate)
                        xChange = coordinate[0]
                        for (let i = 0; i < ship.getLength(); i++) {
                            const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                            theDiv.setAttribute('occupied', ship.myName)
                            theDiv.draggable = true;
                            theDiv.className = 'divtwo'
                            xChange++;
                        }
                 }
                 else {
                    return placeShip(ship, ship.getArray()[0].xy, ship.getDirection(), player)
                 }
            }
        }
    }

    const receiveAttack = (array, coordinate, player) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (player.getTurn() == false) {
            const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
            if (theDiv.getAttribute('occupied') == 'empty' && theDiv.getAttribute('hit') == 'false') {
                missedAttacks.push(coordinate)
                theDiv.setAttribute('hit', true)
                theDiv.className = 'miss'
                theDiv.textContent = 'X'
            } else if (theDiv.getAttribute('occupied') !== 'empty' && theDiv.getAttribute('hit') == 'false') {
                theDiv.setAttribute('hit', true)
                theDiv.className = 'hit'
                theDiv.textContent = 'X'
                let shipName = theDiv.getAttribute('occupied')
                let theShip = array.find(element => element.myName === shipName)
                theShip.isHit(coordinate)
            }
        }
        else {
            const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
            if (theDiv.getAttribute('occupied') == 'empty' && theDiv.getAttribute('hit') == 'false') {
                missedAttacks.push(coordinate)
                theDiv.setAttribute('hit', true)
                theDiv.className = 'miss'
                theDiv.textContent = 'X'
                boardProperties.shipHit = false;
            } else if (theDiv.getAttribute('occupied') !== 'empty' && theDiv.getAttribute('hit') == 'false') {
                theDiv.setAttribute('hit', true)
                theDiv.className = 'hit'
                theDiv.textContent = 'X'
                let shipName = theDiv.getAttribute('occupied')
                let theShip = array.find(element => element.myName === shipName)
                theShip.isHit(coordinate)
                boardProperties.shipHit = true;
                boardProperties.shipCoordinate = [xChange, yChange]
            } else {
                return receiveAttack(array, player.makeRandomMove(), player)
            }
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
    return { placeShip, showBoard, receiveAttack, reportShips, reportLength, shipHit, shipCoordinate, getMissingCoordinates }
}

module.exports = Gameboard