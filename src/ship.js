const Ship = (name, length) => {
    const myName = name;
    const shipProperty = {direction: 'horizontal', sunk: false}
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push({xy: null, hit:false})
    }
    const changeCoordinate = (coordinate) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (shipProperty.direction == 'horizontal') {
                for (let i = 0; i < length; i++) {
                    array[i].xy = [xChange, yChange++]
                }
            } else {
                for (let i = 0; i < length; i++) {
                    array[i].xy = [xChange++, yChange]
                }
            }
        }
    const getLength = () => length
    const getDirection = () => shipProperty.direction
    const changeDirection = (coordinate) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (shipProperty.direction == 'horizontal') {
            if (xChange + (getLength()-1) < 10) {
                xChange++
                for (let i = 1; i < getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    if (myDiv.getAttribute('occupied') == 'empty') {
                        xChange++
                    } else {
                        return console.log('spot is filled')
                    }
                }
                xChange = coordinate[0]
                for (let i = 0; i < getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    myDiv.setAttribute('occupied', 'empty')
                    myDiv.draggable = false;
                    myDiv.className = 'divplayer'
                    yChange++
                }
                yChange = coordinate[1]
                shipProperty.direction = 'vertical'
                for (let i = 0; i< getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    myDiv.setAttribute('occupied', myName)
                    myDiv.draggable = true;
                    myDiv.className = 'divtwo'
                    changeCoordinate(coordinate)
                    xChange++
                }
            }
        } else {
            if (yChange + (getLength()-1) < 10) {
                yChange++
                for (let i = 1; i < getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    if (myDiv.getAttribute('occupied') == 'empty') {
                        yChange++
                    } else {
                        return console.log('please choose a different spot')
                    }
                }
                yChange = coordinate[1]
                for (let i = 0; i < getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    myDiv.setAttribute('occupied', 'empty')
                    myDiv.draggable = false;
                    myDiv.className = 'divplayer'
                    xChange++
                }
                xChange = coordinate[0]
                shipProperty.direction = 'horizontal'
                for (let i = 0; i < getLength(); i++) {
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    myDiv.setAttribute('occupied', myName)
                    myDiv.draggable = true;
                    myDiv.className = 'divtwo'
                    changeCoordinate(coordinate)
                    yChange++
                }
            }
        }
    }
    const getRandomDirection = (number) => {
        if (number == 0) {
            shipProperty.direction = 'horizontal'
            return getDirection()
        } else {
            shipProperty.direction = 'vertical'
            return getDirection()
        }
    }
    const getArray = () => array
    const isHit = (coordinate) => {
        let shipPart = array.findIndex(element => (element.xy.toString() == coordinate))
        return array[shipPart].hit = true;
    }
    const isSunk = () => {
        const isTrue = (element) => element.hit == true
        if (array.every(isTrue)) {
            return shipProperty.sunk = true;
        }
    }
    return { myName, getArray, changeCoordinate, isHit, isSunk, changeDirection, getLength, getDirection, getRandomDirection }
}

module.exports = Ship