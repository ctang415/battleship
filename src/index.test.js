/**
 * @jest-environment jsdom
 */
const Gameboard = require('./gameboard')
const Player = require('./index')

test('player one takes a turn', () => {
    document.body.innerHTML =
    '<div class = "div">' +
    '</div class = "div">';
    const div = document.querySelector('.div')
    div.occupy = 'empty'
    div.hit = false
    const playerOne = Player('me')
    const computerPlayer = Player('ai')
    const computerGameBoard = Gameboard()
    expect(playerOne.attackBoard(computerGameBoard, computerPlayer, div, [[0,1]])).toBe("miss")
})