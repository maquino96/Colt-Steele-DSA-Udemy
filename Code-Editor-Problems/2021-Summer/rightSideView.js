
const rightSideView = root => {
    
    if (!root) return []
    
    let result = [root.value]
    let previousList = [root]
    let finished = false
    
    const previousLevel = (list) => {
        let temp = []
        
        list.forEach(el => {
            if (el.left) {
                temp.push(el.left);
            }
            if ( el.right) {
                temp.push(el.right)
            }
        })
        if (!temp.length) {
            finished = true;
            return;
        }
        result.push(temp[temp.length-1].value)
        previousList = temp   
    }
    
    while (!finished){
        previousLevel(previousList);
    }
    return result
};

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.right = new Node(5);
tree.right.right = new Node(4);

console.log(rightSideView(tree))