const Player = (name) => {
    const myName = name
    let myTurn = true;
    const setFalse = () => myTurn = false
    const attackBoard = (board, enemy, div, coordinate) => {
        if (myTurn) {
            setFalse()
            enemy.myTurn = true;
            return board.receiveAttack(div, coordinate)
        }
    }
    return { attackBoard, setFalse }
}

module.exports = Player