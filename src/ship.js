const Ship = (name, length) => {
    const myName = name;
    let direction = 'horizontal'
    let shipSunk = false;
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push({xy: null, hit:false})
    }
    const changeCoordinate = (coordinate) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (direction == 'horizontal') {
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
    const getDirection = () => direction
    const changeDirection = (coordinate) => {
        let xChange = coordinate[0]
        let yChange = coordinate[1]
        if (direction == 'horizontal') {
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
                    let coords = [xChange, yChange]
                    const myDiv = document.querySelectorAll(`[data-id="[${xChange}, ${yChange}]"]`)[0]
                    myDiv.setAttribute('occupied', 'empty')
                    myDiv.draggable = false;
                    myDiv.className = 'divplayer'
                    yChange++
                }
                yChange = coordinate[1]
                direction = 'vertical'
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
                direction = 'horizontal'
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
    const computerRandomDirection = (number) => {
        if (number == 0) {
            direction = 'horizontal'
            return getDirection()
        } else {
            direction = 'vertical'
            return getDirection()
        }
    }
    const getArray = () => array
    const isHit = (coordinate) => {
        console.log(coordinate)
        console.log(array)
        let shipPart = array.findIndex(element => (element.xy.toString() == coordinate))
        console.log(shipPart)
        return array[shipPart].hit = true;
    }
    const isSunk = () => {
        const isTrue = (element) => element.hit == true
        if (array.every(isTrue)) {
        return shipSunk = true;
        }
        return shipSunk;
    }
    return { myName, getArray, changeCoordinate, isHit, isSunk, changeDirection, getLength, getDirection, computerRandomDirection }
}

module.exports = Ship