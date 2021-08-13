/*
Given a string 
Return a string such that all instances of repeated letters that occur 3 or more times in a row are 'crushed'
e.g. 
ppaaaaccdbbbddc
returns pp
*/

const candyCrush = (string) => {

    let split = string.split('')
    
    let st1 = []
    let st2 = []

    let letter = 0;


    for ( let i = 0; i <= split.length; i++ ) {
        if ( split[letter] !== split[i]) {
            let count = i-letter;

            //check for counts >= 3, don't even push just continue to next iteration 

            if (count >=3) {
                letter = i;
                continue
            }

            //stack checker conditional to crush letters that have a count >=3

            if (st1[st1.length-1] === split[letter] && (st2[st2.length-1] + count) >= 3) {
                st1.pop();
                st2.pop(); 
                letter = i;
                continue           
            } 

            st1.push(split[letter]);
            st2.push(count);
            letter = i;

            //important to update letter = i; 
            
        }
    
    }

    let result = []

    //returns a string based off the 2 stacks

    if (st1.length === st2.length) {
        for ( let j = 0; j < st1.length; j++){
            for (let k = 0; k < st2[j]; k++){
                result.push(st1[j])
            }
        }
    }

    return result.join('')
}

console.log(candyCrush('abbbccddeeeddcabcdeeedd'))
console.log(candyCrush('ppaaaaccdbbbddc'))