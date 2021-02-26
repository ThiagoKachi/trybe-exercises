let numbers = [6];

let impares = 0

for (let i = 0; i < numbers.length; i++) { 
    if(numbers[i] % 2 !== 0) {
        impares += 1
    }
}

if (impares === 0) {
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log(`Existem ${impares} valores ímpares no array`)
}