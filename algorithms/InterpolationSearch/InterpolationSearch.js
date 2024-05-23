function interpolationSearch(array, value) {
    const length = array.length - 1
    let low = 0
    let high = length
    let probe = -1
    let delta = -1

    while (low <= high && value >= array[low] && value <= array[high]) {
        delta = (value - array[low]) / (array[high] - array[low])
        probe = low + Math.floor((high - low) * delta)

        console.log("probe: "+probe)

        if (array[probe] === value) {
            return probe 
        }
        if (array[probe] < value) {
            low = probe + 1
        } else {
            high = probe - 1
        }
    }

    return "not founded"
}

const numbers = []
for (let i = 1; i <= 256; i*=2) {
    numbers.push(i)
}

const result = interpolationSearch(numbers, 128)

console.log(result, numbers)