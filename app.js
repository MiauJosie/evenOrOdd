const num = Number(window.prompt('evenOrOdd'))

if(Number.isNaN(num)) {
    alert("The inserted value is not a valid number")
    throw new Error()
}

let even = false

function evenOrOdd(num){
    if(num % 2 === 0){
        even = true
        document.write(`${num} is even`)
        return
    }
    document.write(`${num} is odd`)
}

evenOrOdd(num)