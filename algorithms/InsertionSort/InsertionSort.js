function insertionSort(array) {
    const length = array.length

    for (let i = 1; i < length; i++) {
        let j
        const temp = array[i]

        for (j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j]
        }

        array[j + 1] = temp
    }

    return array
}

const numbers = [32, 8, 2, 64, 1, 256, 4, 128, 16]

const result = insertionSort(numbers)

console.log(result)