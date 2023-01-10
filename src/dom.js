const Createboard = () => {
    const alphabet = 'ABCDEFGHIJ'
    const sortAlphabet = alphabet.split('')
    const createBoard = (row, col) => {
        const container = document.querySelector('.container')
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                const div = document.createElement('div')
                div.setAttribute('data-id', [sortAlphabet[i],j])
                div.occupied = 'empty'
                div.hit = false;
                container.appendChild(div).className = 'div'
            }
        }
    }
    return { createBoard }
}

module.exports = Createboard