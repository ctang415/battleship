import "./style.css"
const Ship = require('./ship')
const Player = require('./player')
const Gameboard = require('./gameboard')
const Createboard = require('./dom')

const gamePlay = (() => {
    const endGame = () => {
        const enemyDivs = document.querySelectorAll('.divenemy')
        const overlay = document.querySelector('.overlay')
        const content = document.querySelector('.content')
        if (enemyGameboardFunction.reportLength() === 5 && playerGameboardFunction.reportLength() === 5) {
        if (enemyGameboardFunction.reportShips() == "all ships sunk" || playerGameboardFunction.reportShips() == "all ships sunk") {
            if (enemyGameboardFunction.reportShips()) {
                enemyDivs.forEach(div => div.style.pointerEvents = 'none')
                overlay.style.display = 'inline-block'
                return content.textContent = 'You win!'
            } else if (playerGameboardFunction.reportShips()){
                enemyDivs.forEach(div => div.style.pointerEvents = 'none')
                overlay.style.display = 'inline-block'
                return content.textContent = 'You lose!'
            }
        }
    }
    }
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
    const restartButton = document.getElementById('play')
    restartButton.addEventListener('click', function () {
        window.location.reload()
    })
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

      document.addEventListener('DOMContentLoaded', (event) => {
        let previousDiv;
        let currentShip;
        function handleDragStart(ev) {
            ev.target.classList.add('divplayer')
            ev.dataTransfer.setData("data", ev.target.getAttribute('occupied'))
            let newData = ev.dataTransfer.getData('data')
            currentShip = allShips.find(element => element.myName === newData)
            previousDiv = ev.target.getAttribute('data-id')
            console.log('one')
        }

        function handleDragEnd(ev) {
            ev.target.classList.add('divplayer')
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
            if (ev.target.getAttribute('occupied') == 'empty') {
                ev.target.classList.remove('divtwo');
            }
        }

        function handleDrop(ev) {
            ev.preventDefault();
            console.log('six')
            if (ev.target.getAttribute('occupied') == 'empty' || ev.target.getAttribute('occupied') == currentShip.myName) {
                let newData = ev.dataTransfer.getData('data')
                let newCoord = ev.target.getAttribute('data-id')
                let coordX = parseInt(newCoord[1])
                let coordY = parseInt(newCoord[4])
                let shipName = allShips.find(element => element.myName === newData)
                let length = shipName.getLength();
                console.log(previousDiv)
                let oldX = parseInt(previousDiv[1])
                let oldY = parseInt(previousDiv[4])
                if (shipName.getDirection() == 'horizontal') {
                    for (let i = 0; i < length; i++) {
                        let oldDiv = document.querySelectorAll(`[data-id="[${oldX}, ${oldY}]"]`)[0]
                        console.log(oldDiv.getAttribute('occupied'))
                        oldDiv.setAttribute('occupied', 'empty')
                        oldDiv.draggable = false;
                        oldDiv.className = 'divplayer'
                        oldY++
                        console.log([oldX, oldY])
                    }
                } else {
                    for (let i = 0; i < length; i++) {
                        let oldDiv = document.querySelectorAll(`[data-id="[${oldX}, ${oldY}]"]`)[0]
                        oldDiv.setAttribute('occupied', 'empty')
                        console.log(oldDiv.getAttribute('occupied'))
                        oldDiv.draggable = false;
                        oldDiv.className = 'divplayer'
                        oldX++
                    }
                }
                playerGameboardFunction.placeShip(shipName, [coordX, coordY], shipName.getDirection(), computerPlayer)
        }
    }

        let items = document.querySelectorAll('.divplayer, .divtwo');
        items.forEach((item) => {
          item.addEventListener('dragstart', handleDragStart);
          item.addEventListener('dragover', handleDragOver);
          item.addEventListener('dragenter', handleDragEnter);
          item.addEventListener('dragleave', handleDragLeave);
          item.addEventListener('dragend', handleDragEnd);
          item.addEventListener('drop', handleDrop);
        });
      });
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
})();


