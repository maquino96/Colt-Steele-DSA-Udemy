class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const print = (root) => {
    let list = [];
    let queue = [root];

    while (queue.length){
        // console.log(queue);
        let curr = queue.shift();
        list.push(curr.value);

        if(curr.left) queue.push(curr.left);
        if(curr.right) queue.push(curr.right);
    }
    return list
}

/*
                1
            2        3
        4      5  6     7
*/

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

// console.log(tree)
console.log(print(tree))

/*
                1
            3        2
        5      4  7     6
*/


