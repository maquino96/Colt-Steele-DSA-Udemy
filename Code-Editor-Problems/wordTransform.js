
/*console.log('Practice makes Perfect!');  

I have some function that takes 3 inputs Word - character - character
function("Matthew", 't', 'l') -> Mallhew

Given 2 words -> is it possible to transform 1 word into another

AABB -> AACC? Yes 

AABBA -> AACCD? No

Phillip -> Bhakkab
phil -> Matthew no*/


function test ( word1, word2 ) {
  
    let map = {}
    
    if (word1.length !== word2.length ) return false 
    
    for ( let i = 0; i < word1.length; i++){
      
      if (!map[word1[i]]) {
        map[word1[i]] = word2[i]}
      if (map[word1[i]] !== word2[i]) return false
    }
    
    return true
     
  }
  
  console.log( test('aabba', 'aaccd'))
  
  // aabb -> bbaa
  
  
  /*
  input 2 words
  output Yes or no / boolean
  
  note the helper function
  
  declare frequency obj
  
  loop 
    fill the frequency obj
    
  loop
    first word, 
      conditional frequency[word1[i]] === word2[i]
  
  */