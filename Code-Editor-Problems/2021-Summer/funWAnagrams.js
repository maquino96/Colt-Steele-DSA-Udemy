let str = ['code', 'doce', 'ecod', 'framer', 'frame']


// console.log(str[4].split('').sort().join(''))

const funWithAnagrams = (arr) => {

    const hash = {}
    let result = []

    for(let i = 0; i < arr.length; i++){
        let temp = str[i].split('').sort().join('');
        if ( !hash[temp] ) {
            hash[temp]= [i]
        } else { hash[temp].push(i) } 
    }

    console.log(typeof hash, hash)

    for ( const sorted in hash) {
        result.push(arr[hash[sorted][0]])
    }

    return result.sort( (a, b ) => a.length - b.length)

}

console.log(funWithAnagrams(str))
