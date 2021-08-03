const formatString = (string, maxRepeat) => {

    if (maxRepeat === 0 || string.length === 0) { return null}

    let split = string.split("")

    let left = 0;
    let right = 1;
    let result = [split[0]]


    while(right < split.length){

        if (split[left] === split[right] && (right - left ) < maxRepeat){
            result.push(split[left]);
        }
        if ( split[left] !== split[right]){
            result.push(split[right]);
            left = right;
        }
        right++;
        // console.log(result)

    }
    return result.join('')

}

console.log(formatString('',2));
console.log(formatString('xxxy',0));
console.log(formatString('xxxy',2));
console.log(formatString('xxyy',1));
console.log(formatString('xxxxyyyyxx',1));
