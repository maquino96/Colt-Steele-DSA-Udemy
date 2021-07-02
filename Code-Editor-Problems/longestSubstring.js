// Given a string s, find the length of the longest substring without repeating characters


const longestSubstring = (s) => {

    //Sliding window approach

    //hashmap solution

        var start = 0, maxLen = 0;
        var map = new Map();
      
        for(var i = 0; i < s.length; i++) {
            var ch = s[i];
            // line that sides the window down 1
            if(map.get(ch) >= start) start = map.get(ch) + 1;
            map.set(ch, i);
          
            maxLen = Math.max(maxLen, i - start + 1);
        }
      
        return maxLen;


    // sliding window using a readable string solution 

    // let longestStr = '';
    // let currentStr = '';
  
    // for(let i = 0; i < s.length; i++) {
    //   let letter = s[i];
    //   let index = currentStr.indexOf(letter);
  
    //   if(index > -1) {
    //     if(currentStr.length > longestStr.length) longestStr = currentStr;

    // // best line in this code, the below moves the window UP TO the location of the repeated letter. 
    //     currentStr = currentStr.slice(index + 1) + letter;
    //   }
    //   else {
    //     currentStr += letter;
    //   }
    // }
    // if(currentStr.length > longestStr.length) longestStr = currentStr;
    // return longestStr.length;




    // let split = s.split('')

    // console.log(split)

    // let result = 1
    // let temp = 0
    // let freqObj = {}
    // let arr = []

    // freqObj[split[0]] = 1; 

    // let p1 = 0
    // let p2 = 1

    // while ( p2 < split.length ){

    // attempt 2

        // if ( !freqObj[split[p2]] ) {
        //     freqObj[split[p2]] = 1;
        //     arr.push(split[p2])
        //     p2++
        // } else if ( freqObj[split[p2]] ) {
        //     temp = p2-p1 
        //     if( temp > result) result = temp
        //     freqObj = {}
        //     p1 = p2;
        //     p2++;
        // }


        // attempt 1

        // console.log(split[p2])
        
        // if( !freqObj[split[p2]]){
        //     freqObj[split[p2]] = 1;
        //     temp.push(split[p2])
        //     console.log(freqObj)
        // } else if( freqObj[split[p2]]){
        //     if ( temp.length > result.length) result = temp;
        //     freqObj = {}

        // }

        // p2++

    // }
    // console.log(arr)
    // return result
}

console.log(longestSubstring('testingthissubstring'))