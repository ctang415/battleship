import "./style.css"
const Gameboard = require('./gameboard')
const Player = require('./player')
const Createboard = require('./dom')

const gamePlay = (() => {
    const enemyGameboardFunction = Gameboard()
    const playerGameboardFunction = Gameboard()
    const playerOne = Player('me')
    const computerPlayer = Player('AI')
    const playerBoard = Createboard()
    const enemyBoard = Createboard()
    playerBoard.createBoard(10, 10)
    enemyBoard.createBoard(10, 10)
})();
