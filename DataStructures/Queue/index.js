const Queue = require("./Queue");


const queue = new Queue


queue.addElement(1)

queue.addElement(2)

queue.addElement(3)

queue.addElement(4)

queue.addElement(5)

queue.removeElement()


console.log("all elements: " + queue.getElements())

console.log("first element: " + queue.getfirstElement())

console.log("last element: " + queue.getlastElement())

console.log("queue size: " + queue.getSize())

