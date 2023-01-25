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
    const allShips = []
    const myCarrier = Ship('myCarrier', 5)
    const myBattleship = Ship('myBattleship', 4)
    const myCruiser = Ship('myCruiser', 3)
    const mySubmarine = Ship('mySubmarine', 3)
    const myDestroyer = Ship('myDestroyer', 2)
    allShips.push(myCarrier)
    allShips.push(myBattleship)
    allShips.push(myCruiser)
    allShips.push(mySubmarine)
    allShips.push(myDestroyer)
    const enemyCarrier = Ship('enemyCarrier', 5)
    const enemyBattleship = Ship('enemyBattleship', 4)
    const enemyCruiser = Ship('enemyCruiser', 3)
    const enemySubmarine = Ship('enemySubmarine', 3)
    const enemyDestroyer = Ship('enemyDestroyer', 2)
    allShips.push(enemyCarrier)
    allShips.push(enemyBattleship)
    allShips.push(enemyCruiser)
    allShips.push(enemySubmarine)
    allShips.push(enemyDestroyer)
    computerPlayer.setTurnFalse()
    const playerBoard = Createboard()
    const enemyBoard = Createboard()
    playerBoard.nameBoard('My')
    enemyBoard.nameBoard('Computer')
    playerBoard.labelGrid()
    enemyBoard.labelGrid()
    playerBoard.createGrid(10, 10)
    enemyBoard.createGrid(10, 10)
    function directionChange() {
        if (this.getAttribute('occupied') !== 'empty') {
            let shipName = this.getAttribute('occupied')
            let theShip = allShips.find(element => element.myName === shipName)
            let shipCoord = theShip.getArray()[0].xy
            let shipX = shipCoord[0]
            let shipY = shipCoord[1]
            theShip.changeDirection([parseInt(shipX), parseInt(shipY)])
        }
    }
    const playerDivs = document.querySelectorAll('.divplayer');
    playerDivs.forEach(div => div.addEventListener('click', directionChange, true))

    const button = document.getElementById('button')
    button.addEventListener('click', function (){
        playerDivs.forEach(div => div.style.pointerEvents = 'none')
        const enemyDivs = document.querySelectorAll('.divenemy')
        button.style.display = 'none'
        enemyDivs.forEach(div => div.addEventListener('click', function() {
            let currentClick = this.getAttribute('data-id')
            let clickX = currentClick[1]
            let clickY = currentClick[4]
            playerOne.attackBoard(allShips, enemyGameboardFunction, computerPlayer, computerPlayer, [clickX, clickY])
            this.style.pointerEvents = 'none'
            computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, computerPlayer.computerMove())
            endGame()
        }))
    })
  
/*
      document.addEventListener('DOMContentLoaded', (event) => {
        function handleDragStart(ev) {
            console.log(ev.target)
            this.classList.remove('divtwo')
            console.log('one')
        }

        function handleDragEnd(ev) {
            console.log('two')
        }

        function handleDragOver(ev) {
          ev.preventDefault();
          console.log('three')
          ev.target.classList.add('divtwo');
        }
      
        function handleDragEnter(ev) {
            console.log('four')
            ev.target.classList.add('divtwo');
        }
      
        function handleDragLeave(ev) {
            console.log('five')
          ev.target.classList.remove('divtwo');
        }

        function handleDrop(ev) {
            ev.preventDefault();
            console.log('six')
            ev.target.classList.add('divtwo');
            }

        let items = document.querySelectorAll('.div');
        items.forEach((item) => {
          item.addEventListener('dragstart', handleDragStart);
          item.addEventListener('dragover', handleDragOver);
          item.addEventListener('dragenter', handleDragEnter);
          item.addEventListener('dragleave', handleDragLeave);
          item.addEventListener('dragend', handleDragEnd);
          item.addEventListener('drop', handleDrop);
        });
      });
      */
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
        const enemyDivs = document.querySelectorAll('.divenemy')
        if (enemyGameboardFunction.reportLength() === 5 && playerGameboardFunction.reportLength() === 5) {
        if (enemyGameboardFunction.reportShips() == "all ships sunk" || playerGameboardFunction.reportShips() == "all ships sunk") {
            if (enemyGameboardFunction.reportShips()) {
                enemyDivs.forEach(div => div.style.pointerEvents = 'none')
                return console.log("You win!")
            } else if (playerGameboardFunction.reportShips()){
                enemyDivs.forEach(div => div.style.pointerEvents = 'none')
                return console.log("You lose!")
            }
        }
    }
    }
})();


