const Createboard = () => {
    const alphabet = 'ABCDEFGHIJ'
    const sortAlphabet = alphabet.split('')
    const playerLabel = document.querySelector('.playerlabel')
    const computerLabel = document.querySelector('.computerlabel')
    const side = document.querySelector('.side')
    const sideTwo = document.querySelector('.sidetwo')
    const container = document.querySelector('.container')
    const containerTwo = document.querySelector('.containertwo')
    const nameBoard = (name) => {
        if (!playerLabel.firstChild) {
        const playerName = document.createElement('span')
        playerName.textContent = `${name} Board`
        playerLabel.appendChild(playerName)
        } else {
            const playerName = document.createElement('span')
            playerName.textContent = `${name} Board`
            computerLabel.appendChild(playerName)
        }
    }
    const labelGrid = () => {
        if (!container.firstChild) {
            for (let i = 0; i < sortAlphabet.length; i++) {
                const topLabel = document.createElement('span')
                const sideLabel = document.createElement('span')
                topLabel.textContent = sortAlphabet[i]
                sideLabel.textContent = i
                container.appendChild(topLabel).className = 'span'
                side.appendChild(sideLabel)
            }
        } else {
            for (let i = 0; i < sortAlphabet.length; i++) {
                const topLabel = document.createElement('span')
                const sideLabel = document.createElement('span')
                topLabel.textContent = sortAlphabet[i]
                sideLabel.textContent = i
                containerTwo.appendChild(topLabel).className = 'span'
                sideTwo.appendChild(sideLabel)
            }
        }
    }
    const createGrid = (row, col) => {
            if (container.lastChild.textContent == 'J') {
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                    const div = document.createElement('div')
                    div.setAttribute('data-id', `[${i}, ${j}]`)
                    div.setAttribute('occupied', 'empty')
                    div.setAttribute('hit', false)
                    div.draggable = false
                    container.appendChild(div).className = 'divplayer'
                    }
                }
            } else {
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        const div = document.createElement('div')
                        div.setAttribute('data-id', `[${i}, ${j}]`)
                        div.setAttribute('occupied', 'empty')
                        div.setAttribute('hit', false)
                        containerTwo.appendChild(div).className = 'divenemy'
                    }
                }
            }
        }
    return { createGrid, nameBoard, labelGrid }
}

module.exports = Createboard