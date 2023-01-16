const Ship = (name, length) => {
    const myName = name;
    let direction = 'horizontal'
    let shipSunk = false;
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push({xy: null, hit:false})
    }
    const changeCoordinate = (coordinate) => {
        let yChange = coordinate[1]
        let xChange = coordinate[0]
        if (direction == 'horizontal') {
                for (let i = 0; i < length; i++) {
                    array[i].xy = `[${xChange}, ${yChange}]`
                    yChange = yChange++
                }
            } else {
                for (let i =0; i<length; i++) {
                    array[i].xy = `[${xChange}, ${yChange}]`
                    xChange = xChange++
                }
            }
        }
    const getLength = () => length
    const getDirection = () => direction
    const changeDirection = () => {
        if (direction == 'horizontal') {
            direction = 'vertical'
        } else {
            direction = 'horizontal'
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
        return shipSunk = true;
        }
        return shipSunk;
    }
    return { myName, getArray, changeCoordinate, isHit, isSunk, changeDirection, getLength, getDirection }
}

module.exports = Ship