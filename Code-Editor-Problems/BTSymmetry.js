// /*
// Libs included:
//     underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
// */

// console.log('Hey!');


// [[1][2,2][3,4,4,3]
 
//  [[1,0],[2,1], [2,1], [3,2]....]
         
//           1
//         2   2
//       3       3
//     .
//      1000

// // tree height: h 2 h 
// const symmetric = (root) => {
     
//      let queue = [[root, 0]]
//      // let previousLevel = [root]
     
     
//      const check = (list) => {
     
//        for ( let i = 0; i <list.length; i++){
//            if (list[i] !== null) return false
//        }
     
//        return true
//      }
     
//      while ( check(previousLevel)) {
        
//          let nextLevel = getNextLevel(previousLevel)
//          if(not checkTreeLevel(nextLevel)) return false;
//          previousLevel = nextLevel;
         

//      }

//     return true

//  }
 
 
//  /*
// input  [2, 2]
// output [3, null, null, 3]

// class Node {
//     Node left;
//     Node right;
//     int value;

// }
//  */

// List<Node> getNextLevel(List<Node> node) {
    
//    let result = []
   
//    List.forEach( node => {
//        result.push(node.left);
//        result.push(node.right);
//    }
   
//    return result
    
// }

// boolean checkTreeLevel(List<Node> node) {
    
//     let start = 0
//     let end = list.length-1
    
//     while (start < end) {
//         if (list[start] === list[end]) {
//             start++;
//             end--;
//         } else { return false }
        
    
//     }
    
//     return true
       

// }

// THE BELOW DOES NOT WORK FOR ALL CASES*******************

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(2);

// tree.left.left = new Node(undefined);
tree.left.right = new Node(3);

// tree.right.left = new Node(undefined);
tree.right.right = new Node(3);

// console.log(tree)


 var isSymmetric = function(root) {
    
    let previousLevel = [root]
    
    const getNextLevel = (list) => {
        let temp = []
        list.forEach(node => {
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right)
        })
        return temp
    }
    
    const symmetric = (list) => {
        let start = 0
        let end = list.length-1
        
        while ( start < end ){ 
            console.log(list[start].val, list[end].val)

            if (list[start] !== list[end]) {return false};
            start++;
            end--;
        }
        return true;
    }

    // console.log(symmetric([3,null,3,null]))
    
    const check = (list) => {
        for ( let i = 0; i < list.length; i++){
            if (list[i] !== null ) return true
        }
        
        return false
    }
    
    while (check(previousLevel)){
        
        let nextLevel = getNextLevel(previousLevel);
        // console.log(nextLevel)
        if (!symmetric(nextLevel)) return false
        
        previousLevel = nextLevel
    }
    
    return true
    
    
};

console.log(isSymmetric(tree))
 
 
 
 