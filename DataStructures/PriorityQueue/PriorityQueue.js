class PriorityQueue {

    constructor() {

        this.queue = []

    }


    addElement(value) {

        this.queue.push(value)

        this.sortQueue()

    }

    sortQueue() {

        for (let i = 0; i < this.queue.length - 1; i++) {

            for (let j = 0; j < this.queue.length - i - 1; j++) {

                if (this.queue[j] < this.queue[j + 1]) {

                    let temp = this.queue[j]

                    this.queue[j] = this.queue[j + 1]

                    this.queue[j + 1] = temp

                }

            }

        }

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

module.exports = PriorityQueue
