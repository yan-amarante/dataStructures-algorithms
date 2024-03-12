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

    const node = new Node(data)

    if (this.head === null) {

      this.head = node

      this.tail = node

      this.size++

      return

    }

    this.tail.next = node

    this.tail = node

    this.size++

  }

  addAt(data, index) {

    const node = new Node(data)

    let current = this.head

    let temp

    for (let i = 1; i <= this.size; i++) {

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

    let current = this.head

    let temp

    for (let i = 1; i <= this.size; i++) {

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