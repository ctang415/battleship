const Ship = require('./ship')

test('ship is hit', () => {
    const battleship = Ship(1)
    battleship.changeCoordinate(0, [2,1])
    battleship.isHit([2,1])
    expect(battleship.getArray()[0].hit).toBeTruthy()
})

test('ship is not sunk', () => {
    const battleship = Ship(2)
    battleship.changeCoordinate(0, [0,1])
    battleship.isHit([0,1])
    expect(battleship.isSunk()).toBeFalsy()
})

test ('ship is sunk', () => {
    const battleship = Ship(1)
    battleship.changeCoordinate(0, [0,1])
    battleship.isHit([0,1])
    expect(battleship.isSunk()).toBeTruthy()
})
