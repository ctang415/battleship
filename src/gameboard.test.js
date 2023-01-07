/**
 * @jest-environment jsdom
 */
const gameBoard = require('./gameboard')
const Ship = require('./ship')

test('place ship on board', () => {
    const battleship = Ship(2)
    const gameboard =  gameBoard()
    gameboard.placeShip(battleship, [[0,1], [2,2]])
    expect(gameboard.showBoard(battleship, [[0,1], [2,2]])).toBe("set")
})

test('hit misses a ship', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">';
    const div = document.querySelector('.div')
    div.id = [0,1]
    div.occupy = 'empty'
    div.hit = false
    const gameboard = gameBoard()
    const battleship = Ship(1)
    gameboard.placeShip(battleship, [[0,1]])
    expect(gameboard.receiveAttack(div, [[0,1]])).toBe("miss")
})

test('hits a ship', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">';
    const gameboard = gameBoard()
    const battleship = Ship(1)
    gameboard.placeShip(battleship, [[0,1]])
    const div = document.querySelector('.div')
    div.id = [0,1]
    div.occupy = battleship
    div.hit = false
    expect(gameboard.receiveAttack(div, [[0,1]])).toBe("hit")
})