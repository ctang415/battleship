const Player = (name) => {
    const myName = name
    let myTurn = true;
    const setFalse = () => myTurn = false
    const computerMove = () => {
        let randomNumber = []
        let firstNum = Math.floor(Math.random() * 10)
        let secondNum = Math.floor(Math.random() * 10)
        randomNumber.push(firstNum)
        randomNumber.push(secondNum)
        return randomNumber
    }
    const attackBoard = (board, enemy, div, coordinate) => {
        if (myTurn) {
            setFalse()
            enemy.myTurn = true;
            return board.receiveAttack(div, coordinate)
        }
    }
    return { attackBoard, setFalse, computerMove }
}

module.exports = Player