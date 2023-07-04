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
                if (enemyGameboardFunction.reportShips() == 'all ships sunk') {
                    enemyDivs.forEach(div => div.style.pointerEvents = 'none')
                    overlay.style.display = 'inline-block'
                    return content.textContent = 'You win!'
                } else if (playerGameboardFunction.reportShips() == 'all ships sunk'){
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
    let hitX;
    let hitY;
    const button = document.getElementById('button')
    let moveset = [ [0, +1], [0, -1], [+1, 0], [-1, 0] ]
    let hitTarget;
    button.addEventListener('click', function (){
        playerDivs.forEach(div => div.style.pointerEvents = 'none')
        const enemyDivs = document.querySelectorAll('.divenemy')
        button.style.display = 'none'
        enemyDivs.forEach(div => div.addEventListener('click', function() {
            // grabs player clicked div and disables it
            let currentClick = this.getAttribute('data-id')
            console.log(currentClick)
            let clickX = currentClick[1]
            let clickY = currentClick[4]
            // playerOne attacks clicked div
            playerOne.attackBoard(allShips, enemyGameboardFunction, computerPlayer, computerPlayer, [clickX, clickY])
            this.style.pointerEvents = 'none'
            // if queue is empty and computer lands a hit, populate queue with potential moves
           if (computerPlayer.getQueue().length === 0 && playerGameboardFunction.shipHit() === true) {
                const hitSpot = playerGameboardFunction.shipCoordinate()
                hitX = parseInt(hitSpot[0])
                hitY = parseInt(hitSpot[1])
                // store hit to check which direction to traverse in after landing another hit
                hitTarget = [ hitX, hitY ]
                for (let x = 0; x < moveset.length; x++) {
                    if ( ( -1 < moveset[x][0] + hitX && moveset[x][0] + hitX < 10 ) && 
                    ( -1 < moveset[x][1] + hitY && moveset[x][1] + hitY < 10  ) ) {
                        let newY = moveset[x][1] + hitY 
                        let newX = moveset[x][0] + hitX
                        if (JSON.stringify(computerPlayer.getQueue()).includes(JSON.stringify([newX, newY])) === false &&
                        JSON.stringify(playerGameboardFunction.getAttacks()).includes(JSON.stringify([newX, newY])) === false ) {
                            computerPlayer.getQueue().push([newX, newY])
                        }
                    }
                }
                let x = computerPlayer.getQueue().pop()
                computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, x)
                playerGameboardFunction.getAttacks().push(x)
                // if computer misses, continue through queue
            } else if (computerPlayer.getQueue().length !== 0 && playerGameboardFunction.shipHit() === false) {
                let x = computerPlayer.getQueue().pop()
                computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, x)
                playerGameboardFunction.getAttacks().push(x)
            }
            // land a hit after an initial one, do a check to see which direction to move in
            else if ( (playerGameboardFunction.shipHit() === true && computerPlayer.getQueue().length !== 0 )) {
            const hitSpot = playerGameboardFunction.shipCoordinate()
            hitX = parseInt(hitSpot[0])
            hitY = parseInt(hitSpot[1])
            // if X-axis doesn't change, traverse Y-axis
            if ( hitTarget[0] - hitX === 0) {
                let x = [ [0, +2], [0, -2], [0, +1], [0, -1] ]
                for ( let i = 0; i < x.length; i++) {
                    if ( (-1 < hitTarget[1] + x[i][1] && hitTarget[1] + x[i][1] < 10 ) ) {
                    let newY = x[i][1] + hitTarget[1]
                    let newX = x[i][0] + hitTarget[0]
                    if (JSON.stringify(computerPlayer.getQueue()).includes(JSON.stringify([newX, newY])) === false &&
                    JSON.stringify(playerGameboardFunction.getAttacks()).includes(JSON.stringify([newX, newY])) === false) {
                        computerPlayer.getQueue().push([newX, newY])
                    }
                }
                }
            let y = computerPlayer.getQueue().pop()
                computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, y) 
                playerGameboardFunction.getAttacks().push(y)
                // if Y-axis doesn't change, traverse X-axis
            } else if (hitTarget[1] - hitY === 0) {
                let x = [ [+2, 0], [-2, 0], [+1, 0], [-1, 0] ]
                for (let i = 0; i < x.length; i++) {
                    if ( ( -1 < hitTarget[0] + x[i][0] && hitTarget[0] + x[i][0] < 10 )) {
                    let newY = x[i][1] + hitTarget[1]
                    let newX = x[i][0] + hitTarget[0]
                    if (JSON.stringify(computerPlayer.getQueue()).includes(JSON.stringify([newX, newY])) === false &&
                    JSON.stringify(playerGameboardFunction.getAttacks()).includes(JSON.stringify([newX, newY])) === false) {
                        computerPlayer.getQueue().push([newX, newY])
                    }
                }
            }
            let y = computerPlayer.getQueue().pop()
            computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, y)
            playerGameboardFunction.getAttacks().push(y)
            }
        }
             else if (computerPlayer.getQueue().length === 0) {
                let x = computerPlayer.makeRandomMove()
                computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, x)
                playerGameboardFunction.getAttacks().push(x)
                console.log('random')
            // if computer lands an attack while queue is empty, store potential moves into the queue
            } else {
            let y = computerPlayer.getQueue().pop()
            computerPlayer.attackBoard(allShips, playerGameboardFunction, computerPlayer, playerOne, y)
            playerGameboardFunction.getAttacks().push(y)
            console.log('else')
            }
            console.log(computerPlayer.getQueue())
            endGame()
        }))
    })

    document.addEventListener('DOMContentLoaded', () => {
        let previousDiv;
        let currentShip;

        function handleDragStart(ev) {
            ev.target.classList.add('divplayer')
            ev.dataTransfer.setData("data", ev.target.getAttribute('occupied'))
            let newData = ev.dataTransfer.getData('data')
            currentShip = allShips.find(element => element.myName === newData)
            previousDiv = ev.target.getAttribute('data-id')
        }

        function handleDragEnd(ev) {
            ev.target.classList.add('divplayer')
        }

        function handleDragOver(ev) {
          ev.preventDefault();
          ev.target.classList.add('divtwo');
        }
      
        function handleDragEnter(ev) {
            ev.target.classList.add('divtwo');
        }
      
        function handleDragLeave(ev) {
            if (ev.target.getAttribute('occupied') == 'empty') {
                ev.target.classList.remove('divtwo');
            }
        }

        function handleDrop(ev) {
            ev.preventDefault();
            if (ev.target.getAttribute('occupied') == 'empty' || ev.target.getAttribute('occupied') == currentShip.myName) {
                ev.target.classList.remove('divtwo')
                let newData = ev.dataTransfer.getData('data')
                let newCoord = ev.target.getAttribute('data-id')
                let coordX = parseInt(newCoord[1])
                let coordY = parseInt(newCoord[4])
                let shipName = allShips.find(element => element.myName === newData)
                let length = shipName.getLength();
                let oldX = parseInt(previousDiv[1])
                let oldY = parseInt(previousDiv[4])
                if (shipName.getDirection() == 'horizontal') {
                    for (let i = 0; i < length; i++) {
                        let oldDiv = document.querySelectorAll(`[data-id="[${oldX}, ${oldY}]"]`)[0]
                        oldDiv.setAttribute('occupied', 'empty')
                        oldDiv.draggable = false;
                        oldDiv.className = 'divplayer'
                        oldY++
                    }
                } else {
                    for (let i = 0; i < length; i++) {
                        let oldDiv = document.querySelectorAll(`[data-id="[${oldX}, ${oldY}]"]`)[0]
                        oldDiv.setAttribute('occupied', 'empty')
                        oldDiv.draggable = false;
                        oldDiv.className = 'divplayer'
                        oldX++
                    }
                }
                playerGameboardFunction.placeShip(shipName, [coordX, coordY], shipName.getDirection(), computerPlayer)
        }
    }
 
    const items = document.querySelectorAll('.divplayer, .divtwo');
    items.forEach((item) => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
        });
    });

    enemyGameboardFunction.placeShip(enemyCarrier, computerPlayer.makeRandomMove(), enemyCarrier.getRandomDirection(computerPlayer.getRandomNumber()), computerPlayer)
    enemyGameboardFunction.placeShip(enemyBattleship, computerPlayer.makeRandomMove(), enemyBattleship.getRandomDirection(computerPlayer.getRandomNumber()), computerPlayer)
    enemyGameboardFunction.placeShip(enemyCruiser, computerPlayer.makeRandomMove(), enemyCruiser.getRandomDirection(computerPlayer.getRandomNumber()), computerPlayer)
    enemyGameboardFunction.placeShip(enemySubmarine, computerPlayer.makeRandomMove(), enemySubmarine.getRandomDirection(computerPlayer.getRandomNumber()), computerPlayer)
    enemyGameboardFunction.placeShip(enemyDestroyer, computerPlayer.makeRandomMove(), enemyDestroyer.getRandomDirection(computerPlayer.getRandomNumber()), computerPlayer)
    computerPlayer.setPlaceFalse()
    playerGameboardFunction.placeShip(myCarrier, [5, 0], myCarrier.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(myBattleship, [1, 5], myBattleship.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(myCruiser, [6, 6], myCruiser.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(mySubmarine, [2, 2], mySubmarine.getDirection(), computerPlayer)
    playerGameboardFunction.placeShip(myDestroyer, [8, 3], myDestroyer.getDirection(), computerPlayer)
})();


