// naive string search for a string + substring

function naiveSearch ( string, sub) {
	let counter = 0; 
	for ( let i = 0; i < string.length; i++) {
		for (let j = 0; j < sub.length; j++) {
			if (string[i+j] !== sub[j]) break;
			if( j === sub.length-1) counter++;			
		}
	}
	return counter
}

console.log(naiveSearch("lolrie loled", "lol"))
