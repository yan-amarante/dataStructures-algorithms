class Stack {

    constructor() {

        this.stack = []

    }


    addToTheTop(value) {

        this.stack.push(value)

    }

    removeFromTop() {

        if (this.stack.length !== 0) this.stack.pop()

    }

    getLastElement() {

        if (this.stack.length !== 0) return this.stack[this.stack.length - 1]

    }

    getSize() {

        return this.stack.length

    }

    getAllElements() {

        return this.stack

    }

}

module.exports = Stack
