class Queue {

    constructor() {

        this.queue = []

    }


    addElement(value) {

        this.queue.push(value)

    }

    removeElement() {

        this.queue.shift()

    }

    getElements() {

        return this.queue

    }

    getSize() {

        return this.queue.length

    }

    getlastElement() {

        return this.queue[this.queue.length - 1]

    }

    getfirstElement() {

        return this.queue[0]

    }

}

module.exports = Queue
