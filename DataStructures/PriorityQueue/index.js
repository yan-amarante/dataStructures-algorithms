const PriorityQueue = require("./PriorityQueue");


const priorityQueue = new PriorityQueue


priorityQueue.addElement(2)

priorityQueue.addElement(4)

priorityQueue.addElement(1)

priorityQueue.addElement(3)

priorityQueue.addElement(5)

priorityQueue.removeElement()


console.log("all elements: " + priorityQueue.getElements())

console.log("first element: " + priorityQueue.getfirstElement())

console.log("last element: " + priorityQueue.getlastElement())

console.log("queue size: " + priorityQueue.getSize())

