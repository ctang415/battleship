const Ship = require('./index')

test('ship is hit', () => {
    const battleship = new Ship(1)
    battleship.array[0].xy = "[0,1]"
    battleship.isHit("[0,1]")
    expect(battleship.array[0].hit).toBeTruthy()
})

test('ship is not sunk', () => {
    const battleship = new Ship(2)
    battleship.array[0].xy = "[0,1]"
    battleship.isHit("[0,1]")
    expect(battleship.isSunk()).toBeFalsy()
})

test ('ship is sunk', () => {
    const battleship = new Ship(1)
    battleship.array[0].xy = "[0,1]"
    battleship.isHit("[0,1]")
    expect(battleship.isSunk()).toBeTruthy()
})
