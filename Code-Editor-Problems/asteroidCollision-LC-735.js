
const roids = [ -2,1,-3,-4,5]


const asteroidCollision = (arr) => {

    let l = 0
    let r = 1

    let counter = 0

    let stack = []

    while ( counter < arr.length) {
        // console.log(arr)
        if (arr[counter] > 0) { stack.push(arr[counter])}
        if ( arr[counter] < 0 && stack.length > 0) { 
            posRoid = stack.pop()

            if ( posRoid > arr[counter]) arr.splice(counter, 1)
            if ( posRoid === arr[counter]) arr.splice( counter-1, 2)
            if ( posRoid < arr[counter] ) arr.splice( counter-1, 1)
            continue;
        }
        counter++

    }

    return arr

}

console.log(asteroidCollision(roids))