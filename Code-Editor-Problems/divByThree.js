/*

Given a number in string format, find how many substrings are divisible by k (e.g. 3, 11, etc)
 
*/



const divByThree = (num,k) => {

    let count = 0
    let list = []
 
    for (let i = 0; i < num.length; i++){

        let int = ''

        for (let j = i ; j < num.length; j++){
            int+=num[j]
            if (parseInt(int)%k === 0) {
                list.push(parseInt(int))
                count++;
            }
        }
    }
    
    return { 
        count: count,
        list: list
    }
}

console.log(divByThree('33445',11))
// console.log(divByThree('456',3))

//O(n^2) solution due to the nested for loops. 