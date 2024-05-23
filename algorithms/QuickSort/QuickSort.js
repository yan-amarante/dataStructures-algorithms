function quickSort(array){
    const length = array.length

    if(length <= 1){
        return array
    }
    
    const PIVOT = array[0]
    const GREATER = []
    const LESSER = []

    for(let i = 1; i < length; i++){
        if(array[i] > PIVOT){
            GREATER.push(array[i])
        }else{
            LESSER.push(array[i])
        }
    }

    const sorted = [...quickSort(LESSER), PIVOT, ...quickSort(GREATER)]
    return sorted
}

const numbers = [32, 8, 2, 64, 1, 256, 4, 128, 16]

const result = quickSort(numbers)

console.log(result)