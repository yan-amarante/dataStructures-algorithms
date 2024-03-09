const Stack = require("./Stack");


const stack = new Stack


stack.addToTheTop("Exercise for at least 30 minutes (e.g., jogging, yoga)")

stack.addToTheTop("Prepare a healthy lunch for tomorrow")

stack.addToTheTop("Drink 8 glasses of water throughout the day")

stack.addToTheTop("Get 7-8 hours of quality sleep tonight")

stack.removeFromTop()


console.log("last element: " + stack.getLastElement())

console.log("stack size: " + stack.getSize())

console.log("all elements: " + stack.getAllElements())