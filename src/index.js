import "./style.css"
const Gameboard = require('./gameboard')
const Player = require('./player')
const Createboard = require('./dom')
const Ship = require('./ship')

const gamePlay = (() => {
    const enemyGameboardFunction = Gameboard()
    const playerGameboardFunction = Gameboard()
    const playerOne = Player('me')
    const computerPlayer = Player('AI')
    const myCarrier = Ship(5)
    const enemyCarrier = Ship(5)
    const myBattleship = Ship(4)
    const enemyBattleship = Ship(4)
    const myCruiser = Ship(3)
    const enemyCruiser = Ship(3)
    const mySubmarine = Ship(3)
    const enemySubmarine = Ship(3)
    const myDestroyer = Ship(2)
    const enemyDestroyer = Ship(2)
    computerPlayer.setFalse()
    const playerBoard = Createboard()
    const enemyBoard = Createboard()
    playerBoard.nameBoard('My')
    enemyBoard.nameBoard('Computer')
    playerBoard.labelGrid()
    enemyBoard.labelGrid()
    playerBoard.createGrid(10, 10)
    enemyBoard.createGrid(10, 10)
    playerGameboardFunction.placeShip(myCarrier, [4,1], myCarrier.getDirection())
    playerGameboardFunction.placeShip(myBattleship, [1,4], myBattleship.getDirection())
    playerGameboardFunction.placeShip(myCruiser, [2,2], myCruiser.getDirection())
    playerGameboardFunction.placeShip(mySubmarine, [5,8], mySubmarine.getDirection())
    playerGameboardFunction.placeShip(myDestroyer, [7,3], myDestroyer.getDirection())
    const endGame = () => {
        if (enemyGameboardFunction.reportLength === 5 && playerGameboardFunction.reportLength === 5) {
        if (enemyGameboardFunction.reportShips() == "all ships sunk" || playerGameboardFunction.reportShips() == "all ships sunk") {
            if (enemyGameboardFunction.reportShips()) {
                return "You lose!"
            } else {
                return "You won!"
            }
        }
    }
    }
})();
