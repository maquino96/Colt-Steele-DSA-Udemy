function StringChallenge(str) { 

    const map = {
      'zero': '0',
      'one': '1',
      'two': '2',
      'three': '3',
      'four': '4',
      'five': '5',
      'six': '6',
      'seven': '7',
      'eight': '8',
      'nine': '9',
      'minus': '-',
      'plus': '+'
    }
    
    let result = []
    let left = 0
    let right = 1
    
    // str = str.split('')
  
    for ( let i = 0; i <= str.length; i++) {
      if (!map[str.substring(left,right)]) {
        right++
      }
      if ( map[str.substring(left,right)]) {
        result.push(map[str.substring(left,right)])
        left = right;
        right++;
      }
    }
  
    // console.log(result)
  
    let total = 0;
    let tempNum = '';
    let count = 0;
    let sign = 'positive'
  
    let sum = []
  
    while (count <= result.length){
      if (result[count] !== '+' || result[count] !== '-') { 
        tempNum+=result[count]
      }

      if ( tempNum !== '' && result[count] === '+' || result[count] === '-' ){
        if (sign === 'positive'){
            sum.push(parseInt(tempNum));
            tempNum = ''
        }
        if (sign === 'negative') {
            sum.push(parseInt(tempNum)*-1)
            tempNum = '';
        }
      }

      if ( result[count] === '+') {
        sign = 'positive'
      }
  
      if ( result[count] === '-') {
        sign = 'negative'
      }
  
      count++
    }

    if ( tempNum !== ''){
        sign === 'positive' ? sum.push(parseInt(tempNum)) : sum.push(parseInt(tempNum)*-1)
    }
  
    // console.log(count)
  
    let summed = 0

    for ( let num of sum) summed+=num

    // code goes here  
    // return str; 

    // console.log(summed)

    let words = []

    const map2 = {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'nine',
    }

    let test = summed.toString().split('')

    console.log(test)

    for ( let str of test){
        words.push(map2[str])
    }

    return words.join('')
  
  }
     
  // keep this function call here 
//   console.log(StringChallenge(readline()));

console.log(StringChallenge('onezerominuseight'))