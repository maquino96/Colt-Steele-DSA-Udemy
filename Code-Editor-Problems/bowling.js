

let test = [1,2,'X',3,'/',4,5] // 46

let test2 = [1,2,'X',3,5,4,'/',5,2] // 51

let ttest3 = [1,2,'X','X',3,4,5,2]


const bowlingLogic = (arr) => {

    let strikeQueue = []
    let spareQueue = []

    let score = 0

    for ( let i = 0; i < arr.length; i++ ) {
        // console.log(strikeQueue,spareQueue)
        // console.log(typeof arr[i])

        if(arr[i-1] === 'X' || arr[i-2] === 'X') {
            if ( arr[i] === '/') strikeQueue.push(10-arr[i-1])
            else strikeQueue.push(arr[i])
            
        }
        

        if (spareQueue.length) score+=spareQueue.shift()

        if (strikeQueue.length == 2 && arr[i-2] === 'X'){
            score+=strikeQueue.shift()
            score+=strikeQueue.shift()
        }

        if (typeof arr[i] === 'number') {
            score+=arr[i];
            if (arr[i-1] === '/') score+=arr[i];
        }    

        if (arr[i] === 'X') {
            score+=10
            continue
        }

        if (arr[i] === '/') {
            score+=(10-arr[i-1])    
        }

        console.log(score)
    }    
    return score

}

console.log(bowlingLogic(test))