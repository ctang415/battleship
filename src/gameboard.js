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
                        return placeShip(ship, player.computerMove(), ship.getDirection(), player)
                    }
                }
                listOfShips.push(ship)
                ship.changeCoordinate(coordinate)
                yChange = coordinate[1]
                for (let i = 0; i < ship.getLength(); i++) {
                    const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                    theDiv.setAttribute('occupied', ship.myName)
                    theDiv.className = 'divtwo'
                    yChange++;
                }
            }
            else {
                return placeShip(ship, player.computerMove(), ship.getDirection(), player)
            }
        } else if (direction == 'vertical') {
            if (xChange + (ship.getLength()-1) < 10) {
                for (let i = 0; i < ship.getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                    if (myDiv.getAttribute('occupied') == 'empty') {
                        xChange++;
                    } else {
                        return placeShip(ship, player.computerMove(), ship.getDirection(), player)
                    }
                }
                listOfShips.push(ship)
                ship.changeCoordinate(coordinate)
                xChange = coordinate[0]
            } else {
                    return placeShip(ship, player.computerMove(), ship.getDirection(), player)
            }
                for (let i = 0; i < ship.getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[1]
                    console.log(myDiv.getAttribute('data-id'))
                    myDiv.setAttribute('occupied', ship.myName)
                    myDiv.className = 'divtwo'
                    xChange++;
                }
            }
        } else {
                    if (direction == 'horizontal') {
                    if (yChange + (ship.getLength()-1) < 10) {
                        for (let i = 0; i < ship.getLength(); i++) {
                            const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                            if (myDiv.getAttribute('occupied') == 'empty') {
                                yChange++
                            } else {
                                return console.log("choose a different spot")
                            }
                        }
                        listOfShips.push(ship)
                        ship.changeCoordinate(coordinate)
                        yChange = coordinate[1]
                        for (let i = 0; i < ship.getLength(); i++) {
                            const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                            myDiv.setAttribute('occupied', ship.myName)
                            myDiv.className = 'divtwo'
                            yChange++;
                        }
                    }
            } else if (direction == 'vertical') {
                    if (xChange + (ship.getLength()-1) < 10) {
                        for (let i = 0; i < ship.getLength(); i++) {
                            const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                            if (myDiv.getAttribute('occupied') == 'empty') {
                                xChange++
                            } else {
                                return console.log("pick a new spot")
                            }
                        }
                        listOfShips.push(ship)
                        ship.changeCoordinate(coordinate)
                        xChange = coordinate[0]
                        for (let i = 0; i < ship.getLength(); i++) {
                            const theDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                            theDiv.setAttribute('occupied', ship.myName)
                            theDiv.className = 'divtwo'
                            xChange++;
                        }
                 }
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