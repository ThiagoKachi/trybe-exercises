/*
Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

Bonus: use somente um if.
*/

let num1 = 22
let num2 = 22
let num3 = 32

if (num1 % 2 === 1 || num2 % 2 === 1 || num3 % 2 === 1 ) {
    console.log(true)
} else {
    console.log(false)
}
