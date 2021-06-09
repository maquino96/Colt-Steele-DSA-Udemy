const stringCapitalization = (string) => {

    let arr = string.split(' ')
    console.log(arr)

    for ( let i = 0; i < arr.length; i++) {
        // console.log(typeof arr[i][0])
        arr[i]= arr[i][0].toUpperCase()+arr[i].substring(1)
        // console.log(arr[i][0])
    }

    return arr.join(' ')

}

console.log(stringCapitalization('testing if this function works'))