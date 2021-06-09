function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    if (str1.length != str2.length ) { return false }
    const FC1 = {}
    const FC2 = {}
    for ( let val of str1){
        FC1[val] = ( FC1[val] || 0 ) + 1
    }
    for ( let val of str2){
        FC2[val] = ( FC2[val] || 0 ) + 1
    }
    for ( let key in FC1 ) {
      // console.log(FC1, FC2)
        if ( !(key in FC2)) { return false }
        if ( FC2[key] !== FC1[key] ) { return false } 
    }
    
    return true; 
    
  }
  
  console.log(validAnagram('texttwisttime', 'twisttimetext')) // true
  
  
  /*
  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')
  
  */