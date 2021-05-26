function binarySearch ( array, value) {
	let left = 0
	let right = array.length-1
    let middle = Math.floor((left+right)/2)

	while ( array[middle]!== value && left <= right ) {
        // console.log(array[middle], left, right)
        if ( array[middle] === value ) return middle; 
        if ( value < array[middle] ) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((left+right)/2)
	}
    return array[middle] === value ? middle : -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11], 12))