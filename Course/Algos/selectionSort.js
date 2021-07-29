const selectionSort = array => {

    for ( let i = 0; i < array.length; i++ ) {
        let lowest = i; 
        for ( let j = i+1; j < array.length; j++ ) {
            if(array[j] < array[lowest]){
                lowest = j;
            } 
        }
        // console.log(`SWAPPING`)
        // console.log(array)

        // this conditional minimizes the amount og swaps 
        if( i !== lowest){
            let temp =array[i];
            array[i] = array[lowest];
            array[lowest] = temp;
        }
        // console.log('TO:')
        // console.log(array)
        // console.log('*******************')
    }
    return array
}

/*
loop 
loop
    single conditional
    swap
*/


console.log(selectionSort([3,6,4,5,2,1]))