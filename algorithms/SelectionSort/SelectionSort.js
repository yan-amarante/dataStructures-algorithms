function SelectionSort(array) {
    const items = [...array]
    const length = items.length
    for (let i = 0; i < length - 1; i++) {
        let min = i
        for (let j = i + 1; j < length; j++) {
            if (items[j] < items[min]) {
                min = j
            }
        }
        if(min !== i){
            [items[i], items[min]] = [items[min], items[i]]
        }
    }
    return items
}

const numbers = [32, 8, 2, 64, 1, 256, 4, 128, 16]

const result = SelectionSort(numbers)

console.log(result)