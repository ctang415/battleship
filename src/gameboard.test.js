/**
 * @jest-environment jsdom
 */
const Gameboard = require('./gameboard')
const Ship = require('./ship')

test('place ship on board', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">';
    const div = document.querySelector('.div')
    const battleship = Ship(2)
    const gameboard =  Gameboard()
    gameboard.placeShip(battleship, div, [[0,1], [2,2]])
    expect(gameboard.showBoard(battleship, [[0,1], [2,2]])).toBe("set")
})

test('hit misses a ship', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">';
    const div = document.querySelector('.div')
    div.occupy = 'empty'
    div.hit = false
    const gameboard = Gameboard()
    expect(gameboard.receiveAttack(div, [[0,1]])).toBe("miss")
})

test('hits a ship', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">';
    const gameboard = Gameboard()
    const battleship = Ship(1)
    const div = document.querySelector('.div')
    gameboard.placeShip(battleship, div, [[0,1]])
    div.occupy = battleship
    expect(gameboard.receiveAttack(div, [[0,1]])).toBe("hit")
})


test('all ships not sunk', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">' +
    '<div class = "divtwo">' +
    '</div class = "divtwo">';
    const div = document.querySelector('.div')
    const divtwo = document.querySelector('.divtwo')
    div.occupy = 'empty'
    divtwo.occupy = 'empty'
    const gameboard = Gameboard()
    const battleship = Ship(1)
    const cruiser = Ship(1)
    gameboard.placeShip(battleship, div, [[0,1]])
    gameboard.receiveAttack(div, [0,1])
    gameboard.placeShip(cruiser, divtwo, [[0,4]])
    expect(gameboard.reportShips()).toBe("not all ships sunk")
})

test('all ships sunk', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">' +
    '<div class = "divtwo">' +
    '</div class = "divtwo">';
    const div = document.querySelector('.div')
    const divtwo = document.querySelector('.divtwo')
    div.occupy = 'empty'
    divtwo.occupy = 'empty'
    const gameboard = Gameboard()
    const battleship = Ship(1)
    const cruiser = Ship(1)
    gameboard.placeShip(battleship, div, [[0,1]])
    gameboard.placeShip(cruiser, divtwo, [[0,4]])
    gameboard.receiveAttack(div, [0,1])
    gameboard.receiveAttack(divtwo, [0,4])
    expect(gameboard.reportShips()).toBe("all ships sunk")
})