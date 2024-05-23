//console.log("low: " + low, "mid: " + mid, "high: " + high)
function binarySearchRecursive(array, value, low = 0, high = array.length - 1) {
    const mid = Math.floor(low + (high - low) / 2)
    
    if (high >= low) {
        if (array[mid] === value) {
            return mid
        }
        if (value < array[mid]) {
            return binarySearchRecursive(array, value, low, mid - 1)
        } else if (value > array[mid]) {
            return binarySearchRecursive(array, value, mid + 1, high)
        }
    } else return "not founded"
}
function binarySearchIterative(array, value, low = 0, high = array.length - 1) {
    while (high >= low) {
        const mid = Math.floor(low + (high - low) / 2)

        if (array[mid] === value) {
            return mid
        }
        if (value < array[mid]) {
           high = mid - 1
        } else if (value > array[mid]) {
            low = mid + 1
        }
    }
    return "not founded"
}

const numbers = []
for (let i = 1; i <= 256; i*=2) {
    numbers.push(i)
}

const resultRecursive = binarySearchRecursive(numbers, 128)
const resultIterative = binarySearchIterative(numbers, 128)

console.log("Recursive: " + resultRecursive, "Iterative: " + resultIterative)