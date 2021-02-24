/*
Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

let checkNumber = -1

if (checkNumber >= 0) {
    console.log('Positive')
} else if (checkNumber < 0) {
    console.log('Negative')
} else {
    console.log('Valor inválido')
}