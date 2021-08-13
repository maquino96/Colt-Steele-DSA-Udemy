class PriorityQueue {
    constructor(){
        this.values = [];
    }
	// basically inserting into a Heap
    enqueue(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
	// similar to extracting the MaxValue, this.values[0]
    dequeue() {
        const max = this.values[0]
        const end = this.values.pop()
        if (this.values.length > 0) {
          this.values[0] = end
          this.sinkDown()
        }
        return max
      }
      sinkDown() {
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while (true) {
          let leftChildIdx = 2 * idx + 1
          let rightChildIdx = 2 * idx + 2
          let leftChild, rightChild
          let swap = null
     
          if (leftChildIdx < length) {
            leftChild = this.values[leftChildIdx]
            if (leftChild > element) {
              swap = leftChildIdx
            }
          }
          if (rightChildIdx < length) {
            rightChild = this.values[rightChildIdx]
            if (
              swap === null && rightChild > element ||
              swap !== null && rightChild > leftChild
            ) {
              swap = rightChildIdx
            }
          }
     
          if (swap === null) break;
          this.values[idx] = this.values[swap]
          this.values[swap] = element
          idx = swap
        }
      }
}


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let pollution = 0;
    let count = 0;
    let PQ = new PriorityQueue();

    for (let i=0; i < A.length; i++){
        PQ.enqueue(A[i])
        pollution+=A[i]
    }

    pollution = pollution/2
    
    // console.log(pollution)

    while( pollution > 0) {      
        let temp = (PQ.dequeue()/2);
        console.log(pollution)
        pollution-=temp;
        PQ.enqueue(temp)
        count++
        console.log(PQ)
    }

    return count
}

console.log(solution([5,19,8,1]))

/* 
input: array of integers
output: integer, min# of arrays 

NOTE: You can place multiple filters on the same 'factory'

declare priority queue;
declare count = 0;
declare sum;

Loop 1
Add values from input array to priority queue
    Max Binary Heap
Sum up the total value of elements in the array

sum = Math.ceil(sum/2)

Loop2 -- while (sum > 0)
temp =  (Dequeue a value /2) 
sum-= temp
enqueue(temp)
count++

return count 

*/
