// ==========[ Task 1a ]==========

function splitText(text) {
    let myArray = text.split("\n")
    return myArray
}

function removeEmptyStr(array) {
    let cleanArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] != "") {
            cleanArray.push(array[i])
        }
    }
    return cleanArray
}

console.log(removeEmptyStr(splitText("A\nB\nC\n")))
//returns [ 'A', 'B', 'C' ]

// ==========[ Task 1b ]==========
let strNumArray = ["1.2", "-3.4", "5.6", "3.5", "5", "1.2", "2.3"]

function strToNum(value) {
    let myArray = []

    for (let i = 0; i < value.length; i++) {
        myArray.push(Number(value[i]))
    }
    return myArray
}

let numArray = strToNum(strNumArray)
console.log(numArray)
//returns [1.2, -3.4, 5.6, 3.5, 5, 1.2, 2.3]

// ==========[ Task 1c ]==========

const calculateSumOfPairs = (array) => {
    let myArray = []
    let isEven = 0

    if (array.length % 2 != 0) {
        isEven = 1
    }

    for (let i = 0; i < array.length - 1; i += 2) {
        myArray.push(array[i] + array[i + 1])
    }
    return myArray
}

let sumOfPairs = calculateSumOfPairs(numArray)
console.log(sumOfPairs)
// returns [-2.2, 9.1, 6.2]

const displaySumOfPairs = (array) => {
    for (let i = 0; i < array.length; i ++) {
        document.getElementById("sumArray").innerHTML += `
        <li>${array[i]}</li>
        `
    }
}

displaySumOfPairs(sumOfPairs)

