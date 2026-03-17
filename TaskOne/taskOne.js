// ==========[ Task 1a ]==========

function splitText(text){
    let myArray=text.split("\n")
    // myArray.pop()
    
    let cleanArray = []
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] != "") {
            cleanArray.push(myArray[i])
        }
    }
    return cleanArray
}

console.log(splitText("A\nB\nC\n"))
//returns [ 'A', 'B', 'C' ]

// ==========[ Task 1b ]==========

function strToNum(value){
    let myArray=[]

    for(let i=0; i<value.length; i++){
        myArray.push(Number(value[i]))
    }
    return myArray
}

console.log(strToNum(["1.2", "-3.4", "5.6"]))
//returns [ 1.2, -3.4, 5.6 ]

// ==========[ Task 1c ]==========

function sumElements(array){
    let myArray=[]
    for(let i=0; i<array.length; i+=2){
        myArray.push(array[i]+array[i+1])
        document.getElementById("sumArray").innerHTML+=`
        <li>${array[i]+array[i+1]}</li>
        `
    }
    return myArray
}

console.log(sumElements([ 2, 4, 6, 9, 2, 5, 6]))


