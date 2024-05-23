class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    search(value) {
        if (this.value === value) {
            return this
        } else if (value < this.value && this.left !== null) {
            return this.left.search(value)
        } else if (value > this.value && this.right !== null) {
            return this.right.search(value)
        }
        return null
    }

    visit(output = (value) => console.log(value)) {
        if (this.left !== null) {
            this.left.visit()
        }

        output(this.value)

        if (this.right !== null) {
            this.right.visit()
        }
    }

    addNode(node) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node
            } else {
                this.left.addNode(node)
            }
        } else if (node.value > this.value) {
            if (this.right === null) {
                this.right = node
            } else {
                this.right.addNode(node)
            }
        }
    }
    removeNode(value) {
        if (value === this.value) {
            if (!this.left && !this.right) {
                return null
            } else {
                if (this.left) {
                    const leftMax = this.maxValue(this.left)
                    this.value = leftMax
                    this.left = this.left.removeNode(leftMax)
                } else {
                    const rightMin = this.minValue(this.right)
                    this.value = rightMin
                    this.right = this.right.removeNode(rightMin)
                }
            }
        } else if (value < this.value) {
            this.left = this.left && this.left.removeNode(value)
        } else if (value > this.value) {
            this.right = this.right && this.right.removeNode(value)
        }
        return this
    }
    maxValue(node) {
        if (!node.right) {
            return node.value
        }
        return this.maxValue(node.right)
    }
    minValue(node) {
        if (!node.left) {
            return node.value
        }
        return this.minValue(node.left)
    }
}
class Tree {
    constructor() {
        this.root = null
    }

    traverse() {
        if (!this.root) {
            return
        }
        this.root.visit()
    }
    search(value) {
        const found = this.root.search(value)
        if (found !== null) {
            return found.value
        }
        return null
    }
    addValue(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            this.root.addNode(node)
        }
    }
    removeValue(value) {
        this.root = this.root && this.root.removeNode(value)
    }
    traverseDepthFirstSearch() {
        const stack = []
        const result = []

        stack.push(this.searchDepthFirstSearch(this.root, this.root.value))

        if (!stack[0]) return result

        while (stack.length) {
            const currentNode = stack.pop()
            result.push(currentNode.value)
            if (currentNode.left) {
                stack.push(currentNode.left)
            }
            if (currentNode.right) {
                stack.push(currentNode.right)
            }
        }
        return result
    }
    searchDepthFirstSearch(tree, value) {
        const stack = []
        stack.push(tree)
        while (stack.length !== 0) {
            for (let i = 0; i < stack.length; i++) {
                const node = stack.pop()
                if (node.value === value) {
                    return node
                }
                if (node.right) {
                    stack.push(tree[node.right])
                }
                if (node.left) {
                    stack.push(tree[node.left])
                }
            }
        }
        return null
    }
    breadthFirstRecursive() {
        const traversal = []
        const height = this.getHeight(this.root)
        for (let i = 0; i !== height; i++) {
            this.traverseLevel(this.root, i, traversal)
        }
        return traversal
    }
    getHeight(node) {
        if (node === null) {
            return 0
        }

        const leftHeight = this.getHeight(node.left)
        const rightHeight = this.getHeight(node.right)

        return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1
    }
    traverseLevel(node, levelRemaining, traversal) {
        if (node === null) {
            return
        }
        if (levelRemaining === 0) {
            traversal.push(node.value)
        } else {
            this.traverseLevel(node.left, levelRemaining - 1, traversal)
            this.traverseLevel(node.right, levelRemaining - 1, traversal)
        }
    }
    preOrderDFS() {
        const visited = []
        const current = this.root

        const traverse = (node) => {
            visited.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return visited
    }
    inOrderDFS() {
        const visited = []
        const current = this.root

        const traverse = (node) => {
            if (node.left) traverse(node.left)
            visited.push(node.value)
            if (node.right) traverse(node.right)
        }

        traverse(current)
        return visited
    }
    postOrderDFS() {
        const visited = []
        const current = this.root

        const traverse = (node) => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            visited.push(node.value)
        }

        traverse(current)
        return visited
    }
}

module.exports = Tree