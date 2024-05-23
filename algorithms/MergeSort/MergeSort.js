function merge(subArray1, subArray2) {
    const results = []
    let i = 0
    let j = 0

    while (i < subArray1.length && j < subArray2.length){
        if(subArray1[i] < subArray2[j]){
            results.push(subArray1[i++])
        }else{
            results.push(subArray2[j++])
        }
    }

    return results.concat(subArray1.slice(i), subArray2.slice(j))
} 
function mergeSort(array){
    if(array.length < 2) return array

    const arrayHalf = Math.floor(array.length / 2)
    const subArray1 = array.slice(0, arrayHalf)
    const subArray2 = array.slice(arrayHalf, array.length)

    return merge(mergeSort(subArray1), mergeSort(subArray2))
}

const numbers = [32, 8, 2, 64, 1, 256, 4, 128, 16]

const result = mergeSort(numbers)

console.log(result)