const HashTable = require("./HashTable");

const hashTable = new HashTable()

hashTable.set("Canada", 300)
hashTable.set("France", 100)
hashTable.set("Spain", 110)
hashTable.set("Spajm", 140)

hashTable.display()

console.log("size " + hashTable.size)
console.log("value: " + hashTable.get("Canada"))
console.log("value: " + hashTable.get("France"))
console.log("value: " + hashTable.get("Spain"))

console.log("removed: " + hashTable.remove("Spain"))
console.log("value: " + hashTable.get("Spain"))
hashTable.display()