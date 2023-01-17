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
    const computerMove = () => {
        let randomNumber = []
        let firstNum = Math.floor(Math.random() * 10)
        let secondNum = Math.floor(Math.random() * 10)
        randomNumber.push(firstNum)
        randomNumber.push(secondNum)
        return randomNumber
    }
    const randomDirection = () => {
        let theDirection = Math.round(Math.random())
        return theDirection
    }
    const attackBoard = (board, enemy, div, coordinate) => {
        if (myTurn) {
            setFalse()
            enemy.myTurn = true;
            return board.receiveAttack(div, coordinate)
        }
    }
    return { attackBoard, setTurnFalse, computerMove, randomDirection, setPlaceFalse, getPlace, getTurn }
}

module.exports = Player