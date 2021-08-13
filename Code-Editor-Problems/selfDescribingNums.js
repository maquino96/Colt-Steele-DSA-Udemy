/*

Given a integer, determine if it is a self describing number

e.g. 2020 is a self describing number >> true
0 index, there are 2 0s in 2020
1 index, there are 0 1s in 2020
2 index, there are 2 2s in 2020
3 indes, there are 0 3s in 2020
*/

const selfDescribing = (num) => {
    let arrNum = num.toString().split('')

    let dictionary = {}
    for ( let i = 0; i < arrNum.length; i++){
        dictionary[arrNum[i]] ? dictionary[arrNum[i]]++ : dictionary[arrNum[i]] = 1 
    }

    let test = new Map

    for ( let i = 0; i < arrNum.length; i++){
        test.set(i, arrNum[i])
    }

    console.log(test)

    for (let i = 0; i < arrNum.length; i++){
        // console.log(dictionary[i.toString()], parseInt(arrNum[i]))
        // if ( !dictionary[i.toString()] === parseInt(arrNum[i]) || !dictionary[i.toString()]) return false 

        console.log(test.get(i), arrNum[i])
        if ( test.get(i) !== arrNum[i]) return false

    }

    return true 


}


// console.log(selfDescribing(2120))

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

console.log(isSelfDescribing(2020))
console.log(isSelfDescribing(21200))
console.log(isSelfDescribing(1210))
console.log(isSelfDescribing(3211000))
console.log(isSelfDescribing(654))
console.log(isSelfDescribing(123))
