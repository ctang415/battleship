import "./style.css"
const Ship = require('./ship')
const Player = require('./player')
const Gameboard = require('./gameboard')
const Createboard = require('./dom')

const gamePlay = (() => {
    const enemyGameboardFunction = Gameboard()
    const playerGameboardFunction = Gameboard()
    const playerOne = Player('me')
    const computerPlayer = Player('AI')
    const myShips = []
    const enemyShips = []
    const myCarrier = Ship('myCarrier', 5)
    const myBattleship = Ship('myBattleship', 4)
    const myCruiser = Ship('myCruiser', 3)
    const mySubmarine = Ship('mySubmarine', 3)
    const myDestroyer = Ship('myDestroyer', 2)
    myShips.push(myCarrier)
    myShips.push(myBattleship)
    myShips.push(myCruiser)
    myShips.push(mySubmarine)
    myShips.push(myDestroyer)
    const enemyCarrier = Ship('enemyCarrier', 5)
    const enemyBattleship = Ship('enemyBattleship', 4)
    const enemyCruiser = Ship('enemyCruiser', 3)
    const enemySubmarine = Ship('enemySubmarine', 3)
    const enemyDestroyer = Ship('enemyDestroyer', 2)
    enemyShips.push(enemyCarrier)
    enemyShips.push(enemyBattleship)
    enemyShips.push(enemyCruiser)
    enemyShips.push(enemySubmarine)
    enemyShips.push(enemyDestroyer)
    computerPlayer.setTurnFalse()
    const playerBoard = Createboard()
    const enemyBoard = Createboard()
    playerBoard.nameBoard('My')
    enemyBoard.nameBoard('Computer')
    playerBoard.labelGrid()
    enemyBoard.labelGrid()
    playerBoard.createGrid(10, 10)
    enemyBoard.createGrid(10, 10)
    const divChange = (() => {
        let divs = document.querySelectorAll('.div')
        divs.forEach(div => div.addEventListener('click', function() {
            if (this.getAttribute('occupied') !== 'empty') {
                let shipName = this.getAttribute('occupied')
                let theShip = myShips.find(element => element.myName == shipName)
                let shipCoord = theShip.getArray()[0].xy
                let shipX = shipCoord[1]
                let shipY = shipCoord[4]
                theShip.changeDirection([parseInt(shipX), parseInt(shipY)])
            }
            else {
                console.log(this.getAttribute('data-id'))
            }
        })
    )})()
    enemyGameboardFunction.placeShip(enemyCarrier, computerPlayer.computerMove(), enemyCarrier.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(enemyBattleship, computerPlayer.computerMove(), enemyBattleship.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(enemyCruiser, computerPlayer.computerMove(), enemyCruiser.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(enemySubmarine, computerPlayer.computerMove(), enemySubmarine.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    enemyGameboardFunction.placeShip(enemyDestroyer, computerPlayer.computerMove(), enemyDestroyer.computerRandomDirection(computerPlayer.randomDirection()), computerPlayer)
    computerPlayer.setPlaceFalse()
    playerGameboardFunction.placeShip(myCarrier, [5, 3], myCarrier.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(myBattleship, [1, 5], myBattleship.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(myCruiser, [6, 6], myCruiser.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(mySubmarine, [2, 2], mySubmarine.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(myDestroyer, [7, 7], myDestroyer.getDirection(), computerPlayer)
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

