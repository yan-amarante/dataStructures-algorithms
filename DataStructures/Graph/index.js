const Graph = require("./Graph")

const graphAdjacencyList = new Graph.GraphAdjacencyList

function graphAdjacencyListTest() {
    graphAdjacencyList.addNode(1)
    graphAdjacencyList.addNode(2)
    graphAdjacencyList.addNode(3)
    graphAdjacencyList.addNode(4)
    graphAdjacencyList.addNode(5)

    graphAdjacencyList.addEdge(1, 2)
    graphAdjacencyList.addEdge(2, 3)
    graphAdjacencyList.addEdge(2, 4)
    graphAdjacencyList.addEdge(3, 5)

    console.log(graphAdjacencyList.getNeighboors(1))
    console.log(graphAdjacencyList.getNeighboors(2))
    console.log(graphAdjacencyList.getNeighboors(3))
    console.log(graphAdjacencyList.getNeighboors(4))
    console.log(graphAdjacencyList.getNeighboors(5))

    console.log("has edge 1, 2: " + graphAdjacencyList.hasEdge(1, 2))
    console.log("has edge 3, 4: " + graphAdjacencyList.hasEdge(3, 4))

    console.log(graphAdjacencyList.depthFirstSearchRecursive(5, 1))
    console.log(graphAdjacencyList.depthFirstSearchRecursive(4, 5))
    console.log(graphAdjacencyList.depthFirstSearchRecursive(5, 100))

    console.log(graphAdjacencyList.depthFirstSearchIterative(5, 1))
    console.log(graphAdjacencyList.depthFirstSearchIterative(4, 5))
    console.log(graphAdjacencyList.depthFirstSearchIterative(5, 100))

    console.log(graphAdjacencyList.breadthFirstSearch(5))
}

function graphAdjacencyMatrixTest() {
    const graphAdjacencyMatrix = new Graph.GraphAdjacencyMatrix(6)

    graphAdjacencyMatrix.addEdge(1, 2)
    graphAdjacencyMatrix.addEdge(2, 3)
    graphAdjacencyMatrix.addEdge(2, 4)
    graphAdjacencyMatrix.addEdge(3, 5)

    console.log(graphAdjacencyMatrix.getNeighboors(0))
    console.log(graphAdjacencyMatrix.getNeighboors(1))
    console.log(graphAdjacencyMatrix.getNeighboors(2))
    console.log(graphAdjacencyMatrix.getNeighboors(3))
    console.log(graphAdjacencyMatrix.getNeighboors(4))
    console.log(graphAdjacencyMatrix.getNeighboors(5))

    console.log("has edge 1, 2: " + graphAdjacencyMatrix.hasEdge(1, 2))
    graphAdjacencyMatrix.removeEdge(1, 2)

    console.log("has edge 1, 2: " + graphAdjacencyMatrix.hasEdge(1, 2))
    console.log("has edge 3, 4: " + graphAdjacencyList.hasEdge(3, 4))


    console.log(graphAdjacencyMatrix.depthFirstSearchRecursive(5, 1))
    console.log(graphAdjacencyMatrix.depthFirstSearchRecursive(4, 5))
    console.log(graphAdjacencyMatrix.depthFirstSearchRecursive(5, 100))
    console.log(graphAdjacencyMatrix.breadthFirstSearch(5))
}
graphAdjacencyListTest()
graphAdjacencyMatrixTest()