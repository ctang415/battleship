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
    const myCarrier = Ship('Carrier', 5)
    const enemyCarrier = Ship('Carrier', 5)
    const myBattleship = Ship('Battleship', 4)
    const enemyBattleship = Ship('Battleship', 4)
    const myCruiser = Ship('Cruiser', 3)
    const enemyCruiser = Ship('Cruiser', 3)
    const mySubmarine = Ship('Submarine', 3)
    const enemySubmarine = Ship('Submarine', 3)
    const myDestroyer = Ship('Destroyer', 2)
    const enemyDestroyer = Ship('Destroyer', 2)
    computerPlayer.setFalse()
    const playerBoard = Createboard()
    const enemyBoard = Createboard()
    playerBoard.nameBoard('My')
    enemyBoard.nameBoard('Computer')
    playerBoard.labelGrid()
    enemyBoard.labelGrid()
    playerBoard.createGrid(10, 10)
    enemyBoard.createGrid(10, 10)
    enemyGameboardFunction.placeShip(myCarrier, computerPlayer.computerMove(), myCarrier.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(myBattleship, computerPlayer.computerMove(), myBattleship.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(myCruiser, computerPlayer.computerMove(), myCruiser.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(mySubmarine, computerPlayer.computerMove(), mySubmarine.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(myDestroyer, computerPlayer.computerMove(), myDestroyer.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
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
