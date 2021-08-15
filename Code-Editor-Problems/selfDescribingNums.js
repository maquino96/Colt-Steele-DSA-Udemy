/*

Given a integer, determine if it is a self describing number

e.g. 2020 is a self describing number >> true
0 index, there are 2 0s in 2020
1 index, there are 0 1s in 2020
2 index, there are 2 2s in 2020
3 indes, there are 0 3s in 2020
*/

const selfDescribing = (num) => {
    let arrNum = num.toString()


    // use a map to store frequency of each number 
    let d = {}
    for ( let i = 0; i < arrNum.length; i++){
        d[arrNum[i]] ? d[arrNum[i]]++ : d[arrNum[i]] = 1 
    }

    // iterate through the number, comparing the value at the index to the map value
    for (let j = 0; j < arrNum.length; j++){


        // if an index is not saved in the map, count is set to 0
        let count = d[j.toString()] ? d[j.toString()] : 0

        if (parseInt(arrNum[j]) === count) {
            continue
        } else { return false}
    }
    return true 
}

console.log(selfDescribing(2020)) //true
console.log(selfDescribing(21200)) //true 
console.log(selfDescribing(1210)) //true 
console.log(selfDescribing(3211000)) //true
console.log(selfDescribing(654)) //false
console.log(selfDescribing(123)) //false




function isSelfDescribing(n) {
    let digits = String(n).split("");
    digits = digits.map(function(e) {return parseInt(e)});
    let count = digits.map((x) => {return 0})
    digits.forEach((d) =>{
        if (d >= count.length) {
            return false
        }
        count[d] += 1;
    });

     if (digits === count) {
        return true;
    }
    if (digits.length != count.length) {
        return false;
    }
    
    for (let i=0; i< digits.length; i++){
      if (digits[i] !== count[i]) {
        return false;
      }
    }
    return true;
}

// console.log(isSelfDescribing(2020))
// console.log(isSelfDescribing(21200))
// console.log(isSelfDescribing(1210))
// console.log(isSelfDescribing(3211000))
// console.log(isSelfDescribing(654))
// console.log(isSelfDescribing(123))

