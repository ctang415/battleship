const Ship = (length) => {
    let shipSunk = false;
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push({xy: null, hit:false})
    }
    const changeCoordinate = (index, coordinate) => {
        array[index].xy = coordinate
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
    return { getArray, changeCoordinate, isHit, isSunk }
}

module.exports = Ship