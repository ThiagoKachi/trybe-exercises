/*
Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let num1 = 10
let num2 = 2
let num3 = 5

if (num1 > num2 && num1 > num3) {
    console.log(`O número ${num1} é o maior`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`O número ${num2} é o maior`)
} else {
    console.log(`O número ${num3} é o maior`)
}