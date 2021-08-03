class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let example = new Node(5);

example.left = new Node(4)
example.left.left = new Node(11)
example.left.left.left = new Node(7)
example.left.left.right = new Node(2)

example.right = new Node(8)
example.right.left = new Node(13)
example.right.right = new Node(4)
example.right.right.left = new Node(5)
example.right.right.right = new Node(1)



const treeDFS = (tree, target) => {

    let result = [];
    let path = []
    let queue = [root]


    while (queue.length !== 0){
        let current = queue.shift();
        path.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);

        
    }

}