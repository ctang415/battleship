const Player = (name) => {
    const myName = name
    let myTurn = true;
    const setFalse = () => myTurn = false
    const computerMove = () => {
        const firstNum = Math.floor(Math.random() * 10)
        const secondNum = Math.floor(Math.random() * 10)
        return [firstNum, secondNum]
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