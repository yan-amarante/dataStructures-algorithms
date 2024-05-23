class GraphAdjacencyList {
    adjacencyList

    constructor() {
        this.adjacencyList = new Map()
    }

    addNode(node) {
        this.adjacencyList.set(node, new Set())
        //this.adjacencyList.set(node, new Map()) //weighted graph
    }
    addEdge(node1, node2, weight) {
        this.adjacencyList.get(node1).add(node2)
        this.adjacencyList.get(node2).add(node1) //undirected graph, delete this line to transform to a directed
        //this.adjacencyList.get(node2).add(node1,weight) //weighted graph
    }
    getNeighboors(node) {
        return this.adjacencyList.get(node)
    }
    hasEdge(node1, node2) {
        return this.adjacencyList.get(node1).has(node2)
    }
    depthFirstSearchRecursive(node, value, visited = new Set()) {
        if (node === value) {
            return true
        }

        visited.add(node)
        for (const neighbour of this.adjacencyList.get(node)) {
            if (!visited.has(neighbour)) {
                if (this.depthFirstSearchRecursive(neighbour, value, visited)) {
                    return true
                }
            }
        }
        return false
    }
    depthFirstSearchIterative(node, value) {
        const stack = [node]
        const visited = new Set()
        while (stack.length > 0) {
            const currentNode = stack.pop()

            if (currentNode === value) {
                return true
            }

            visited.add(currentNode)

            for (const neighbour of this.adjacencyList.get(currentNode)) {
                if (!visited.has(neighbour)) {
                    stack.push(neighbour)
                }
            }
        }
        return false
    }
    breadthFirstSearch(node) {
        const visited = new Set()
        const queue = [node]
        const result = []

        while (queue.length) {
            const currentNode = queue.shift()

            if (!visited.has(currentNode)) {
                visited.add(currentNode)
                result.push(currentNode)

                for (const neighbour of this.adjacencyList.get(currentNode)) {
                    queue.push(neighbour)
                }
            }
        }

        return result
    }
}
class GraphAdjacencyMatrix {
    numberNodes
    adjacencyMatrix

    constructor(numberNodes) {
        this.numberNodes = numberNodes
        this.adjacencyMatrix = []

        for (let i = 0; i < this.numberNodes; i++) {
            this.adjacencyMatrix[i] = new Array(this.numberNodes).fill(0)
        }
    }

    addEdge(node1, node2, weight) {
        this.adjacencyMatrix[node1][node2] = 1
        this.adjacencyMatrix[node2][node1] = 1 //undirected graph, delete this line to transform to a directed
        //this.adjacencyMatrix[node1][node2] = weight
        //this.adjacencyMatrix[node2][node1] = weight  //weighted graph
    }
    getNeighboors(node) {
        return this.adjacencyMatrix[node]
    }
    hasEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numberNodes && node2 >= 0 && node2 < this.numberNodes) {
            return this.adjacencyMatrix[node1][node2] === 1 && this.adjacencyMatrix[node2][node1] === 1 //undirected graph, delete the code after && to transform to a directed
            //return this.adjacencyMatrix[node1][node2] !== 0 && this.adjacencyMatrix[node2][node1] !== 0 //weighted graph
        }

        return false
    }
    removeEdge(node1, node2) {
        if (node1 >= 0 && node1 < this.numberNodes && node2 >= 0 && node2 < this.numberNodes) {
            this.adjacencyMatrix[node1][node2] = 0
            this.adjacencyMatrix[node2][node1] = 0 //undirected graph, delete this line to transform to a directed
        }
    }
    depthFirstSearchRecursive(node, value, visited = new Set()) {
        if (node === value) {
            return true
        }
        visited.add(node)
        for (let i = 0; i < this.numberNodes; i++) {
            if (this.adjacencyMatrix[node][i] === 1 && !visited.has(i)) {// change the === 1 to !== 0 for weighted graph
                if (this.depthFirstSearchRecursive(i, value, visited)) {
                    return true
                }
            }
        }
        return false
    }
    breadthFirstSearch(node) {
        const visited = new Set()
        const queue = [node]
        const result = []

        while (queue.length) {
            const currentNode = queue.shift()

            if (!visited.has(currentNode)) {
                visited.add(currentNode)
                result.push(currentNode)

                for (let i = 0; i < this.numberNodes; i++) {
                    if (this.adjacencyMatrix[currentNode][i] === 1 && !visited.has(i)) {// change the === 1 to !== 0 for weighted graph
                        queue.push(i)
                    }
                }
            }
        }

        return result
    }
}

module.exports = {
    GraphAdjacencyList: GraphAdjacencyList,
    GraphAdjacencyMatrix: GraphAdjacencyMatrix
}