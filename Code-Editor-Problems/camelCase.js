/*
———————————————————
Input:

Apple
ONE

aPpLe
two

apple 
three
——————————————————
Output:

appleOne appleTwo appleThree

*/

const camelCase = (s1,s2) => {

    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase().split('')

    // console.log(s2)
    s2[0] = s2[0].toUpperCase();
    s2 = s2.join('')

    return s1+s2
}

// console.log(camelCase('Apple', 'ONE'))
// console.log(camelCase('aPpLe', 'two'))
// console.log(camelCase('apple', 'three'))

const newCamelCase = (chunk) => {

    let strArr = chunk.split('\n')

    let str1 = strArr[0];
    let str2 = strArr[1];

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase().split('');

    str2[0] = str2[0].toUpperCase();
    str2 = str2.join('');

    return str1+str2
}

console.log(newCamelCase('Apple\nONE'))
console.log(newCamelCase('aPpLe\ntwo'))
console.log(newCamelCase('apple\nthree'))