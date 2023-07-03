const Player = (name) => {
    const myName = name
    const playerProperties = {myTurn: true, canPlace: true, shipSunk: false, 
        moveSet: [ [0, +1], [0, -1], [+1 , 0], [-1, 0] ], direction: null }
    const setPlaceFalse = () => {
        return playerProperties.canPlace = false
}
    const getPlace = () => playerProperties.canPlace
    const getTurn = () => playerProperties.myTurn
    const getHit = () => playerProperties.shipSunk
    const getMoveset = () => playerProperties.moveSet
    const setSunkFalse = () => {
        return playerProperties.shipSunk = false
    }
    const setSunkTrue = () => {
        return playerProperties.shipSunk = true
    }
    const setTurnFalse = () => { 
        return playerProperties.myTurn = false 
    }
    const setTurnTrue = () => {
        return playerProperties.myTurn = true
    }
    const makeRandomMove = () => {
        let randomNumber = []
        let firstNum = Math.floor(Math.random() * 10)
        let secondNum = Math.floor(Math.random() * 10)
        randomNumber.push(firstNum)
        randomNumber.push(secondNum)
        return randomNumber
    }

    const makeCalculatedMove = (x, y) => {
        if ( (x + 1) < 10) {
            x = x + 1
        }
    }

    const getRandomNumber = () => {
        let theDirection = Math.round(Math.random())
        return theDirection
    }
    const attackBoard = (array, board, player, enemy, coordinate) => {
        if (playerProperties.myTurn == true) {
            board.receiveAttack(array, coordinate, player)
            setTurnFalse()
            enemy.setTurnTrue()
        }
    }
    return { attackBoard, setTurnFalse, makeRandomMove, getRandomNumber, setPlaceFalse, getPlace, getTurn, setTurnTrue, 
        getHit, getMoveset, setSunkFalse, setSunkTrue }
}

module.exports = Player