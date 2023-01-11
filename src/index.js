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
    playerBoard.nameBoard('Carrie')
    enemyBoard.nameBoard('Computer')
    playerBoard.labelGrid()
    enemyBoard.labelGrid()
    playerBoard.createGrid(10, 10)
    enemyBoard.createGrid(10, 10)
})();
