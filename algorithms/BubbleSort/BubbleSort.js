function bubbleSort(array) {
    let length = array.length
    let noSwaps

    for (let i = length; i > 0; i--) {
        noSwaps = true

        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
    }

    return array
}

const numbers = [32, 8, 2, 64, 1, 256, 4, 128, 16]

const result = bubbleSort(numbers)

console.log(result)