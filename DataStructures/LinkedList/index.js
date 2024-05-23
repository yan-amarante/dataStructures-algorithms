const LinkedList = require("./LinkedList");

const linkedList = new LinkedList

linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addLast(45)
linkedList.addLast(5)
linkedList.removeFirst()
linkedList.removeLast()
linkedList.removeAt(2)
linkedList.addAt(55, 2)
linkedList.printListData()

console.log(linkedList)
