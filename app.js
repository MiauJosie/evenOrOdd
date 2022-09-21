const num = Number(window.prompt('evenOrOdd'))

if(Number.isNaN(num)) {
    alert("O valor inserido não é um número válido.")
    throw new Error()
}

let even = false

function evenOrOdd(num){
    if(num % 2 === 0){
        even = true
        document.write("O número é par")
        return
    }
    document.write("O número é ímpar")
}

evenOrOdd(num)