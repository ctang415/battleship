const Player = (name) => {
    const myName = name
    const playerProperties = {myTurn: true, canPlace: true}
    const setPlaceFalse = () => {
        return playerProperties.canPlace = false
}
    const getPlace = () => playerProperties.canPlace
    const getTurn = () => playerProperties.myTurn
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
    return { attackBoard, setTurnFalse, makeRandomMove, getRandomNumber, setPlaceFalse, getPlace, getTurn, setTurnTrue }
}

module.exports = Player