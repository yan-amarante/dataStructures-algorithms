const Tree = require("./BinarySearchTree")

const tree = new Tree

tree.addValue(10)
tree.addValue(2)
tree.addValue(4)
tree.addValue(8)
tree.addValue(16)
tree.addValue(32)
tree.addValue(64)

console.log(tree.traverse())
console.log(tree.search(4))
console.log(tree.removeValue(32))
console.log(tree.traverse())
console.log(tree.traverseDepthFirstSearch())
console.log(tree.breadthFirstRecursive())
console.log("preOrderDFS: " + tree.preOrderDFS())
console.log("inOrderDFS: " + tree.inOrderDFS())
console.log("postOrderDFS: " + tree.postOrderDFS())