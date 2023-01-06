import './style.css';

const Ship = (length) => {
    let shipSunk = false;
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push({xy: null, hit:false})
    }
    const isHit = (coordinate) => {
        let shipPart = array.find(element => element.xy === coordinate)
        return shipPart.hit = true;
    }
    const isSunk = () => {
        const isTrue = (element) => element.hit === true
        if (array.every(isTrue)) {
        return shipSunk = true;
        }
        return shipSunk;
    }
    return { array, isHit, isSunk }
}

module.exports = Ship