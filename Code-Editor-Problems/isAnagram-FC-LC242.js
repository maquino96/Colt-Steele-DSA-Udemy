var isAnagram = function(s, t) {
    
    let sObj = {}
    let tObj = {}
    
    for (let i = 0; i < s.length; i++){
        console.log(sObj[s[i]])
        if (sObj[s[i]]) { sObj[s[i]]=sObj[s[i]]+ 1
                  } else { sObj[s[i]] = 1 }
    }
    
    for (let i = 0; i < t.length; i++){
        if (tObj[t[i]]) { tObj[t[i]]=tObj[t[i]]+ 1
                  } else { tObj[t[i]] = 1 }
    }
    
    console.log(sObj)
    console.log(tObj)

    for ( let key in sObj ) {
        if (!tObj[key]) { return false}
        if ( tObj[key] !== sObj[key]){return false}
    }
    return true; 
};

let s = 'aacc';
let t = 'ccac';

console.log(isAnagram(s,t)) // true