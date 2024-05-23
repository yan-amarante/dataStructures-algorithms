class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  addFirst(data) {
    const node = new Node(data)
    if (this.head === null) this.tail = node
    node.next = this.head
    this.head = node
    this.size++
  }
  addLast(data) {
    if (this.head === null) return this.addFirst(data)

    const node = new Node(data)
    this.tail.next = node
    this.tail = node
    this.size++
  }
  addAt(data, index) {
    if (index > this.length || index < 0) throw new RangeError("Out of Range Index")
    if (index === 0) return this.addFirst(data)
    if (index === this.length) return this.addLast(data)

    const node = new Node(data)
    let current = this.head
    let temp

    for (let i = 0; i < this.size; i++) {
      if (i === index - 1) {
        temp = current
        if (i !== this.size) {
          node.next = current.next
          current.next = node
          this.size++
          break;
        }
      }
      current = current.next
    }
  }
  removeFirst() {
    this.head = this.head.next
    this.size--
  }
  removeLast() {
    let current = this.head
    for (let i = 1; i <= this.size; i++) {
      if (i === this.size - 1) {
        current.next = null
        this.tail = current
        this.size--
        break;
      }
      current = current.next
    }
  }
  removeAt(index) {
    if (index > this.length || index < 0) throw new RangeError("Out of Range Index")
    if (index === 0) return this.addFirst()
    if (index === this.length) return this.addLast()

    let current = this.head
    let temp
    
    for (let i = 0; i < this.size; i++) {
      if (i === index - 1) {
        temp = current
        if (i !== this.size) {
          current.next = current.next.next
          this.size--
          break;
        }
      }
      current = current.next
    }
  }
  printListData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

module.exports = LinkedList