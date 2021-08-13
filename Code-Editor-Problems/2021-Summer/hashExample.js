

let array = [
    ['black', '#000000'],
    ['pink', '#ff69b4'],
    ['orangered', 'ff4500'],
    ['cyan', '#00ffff'],
    ['white', '#ffffff'] 
];

let hashMap = {
    black: '#000000',
    pink: '#ff69b4',
    orangered: '#ff4500',
    cyan: '#00ffff',
    white: '#ffffff'
}

const searchArray = (arr, color) => {

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
        if( arr[i][0] === color) return arr[i][1]
    }

    return `The color: ${color} is not stored in this array`
}

console.log(searchArray(array, 'cyan'))
console.log(searchArray(array, 'lavender'))

console.log(hashMap['cyan'])
console.log(hashMap['lavender'])