//creating linked list of all the nodes at each depth. Tree w/ depth D --> D linked lists
class Node {
    constructor(left, right, value) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
}
const createLevelLinkedList = (lists) => {
    //BFS
    let root = lists[0];
    if (root === null) return
    let result = [];//new ArrayList<LinkedList<Tree Node>>
    let current = [root];//LinkedList<Tree Node>
    result = [current];
    while (current.length) {
        let parents = current;
        current = [];
        // console.log("debug parents --> ", parents)
        parents.map(parent => {
            if (parent.left) {
                current = [...current, parent.left];
            }
            if (parent.right) {
                current = [...current, parent.right];
            }
        })
        result = current.length ? [...result, current] : result
    }
    return result
}


const node2 = new Node(null, null, 2);
const node1 = new Node(null, null, 1);
const node3 = new Node(node1, node2, 3);
const node4 = new Node(null, null, 4);
const node5 = new Node(node3, node4, 5);

//Tree 5 ->> 4-->null ~ 3--> 1-2
const lists = [node5, node4, node3, node2, node1];

console.log(createLevelLinkedList(lists))



