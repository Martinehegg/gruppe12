
//a)

function getText(text){
    let myArray=text.split("\n")
    myArray.pop()
    return myArray
}

console.log(getText("A\nB\nC\n"))

//returns [ 'A', 'B', 'C' ]

//b)

function getValue(value){
    let myArray=[]

    for(let i=0; i<value.length; i++){
        myArray.push(Number(value[i]))
    }
    return myArray

}

console.log(getValue(["1.2", "-3.4", "5.6"]))

//returns [ 1.2, -3.4, 5.6 ]

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


