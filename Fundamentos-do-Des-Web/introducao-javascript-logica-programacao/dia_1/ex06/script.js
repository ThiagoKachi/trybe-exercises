/*
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals
*/

let pecas = 'Peao'.toLowerCase()

switch (pecas) {
    case 'rei':
        console.log('Qualquer direção, uma casa por vez')
        break;
    case 'dama':
        console.log('Qualquer direção')
        break;
    case 'torre':
        console.log('Linha reta')
        break;
    case 'bispo':
        console.log('Diagonal')
        break;
    case 'cavalo':
        console.log('Movimento em L')
        break;
    case 'peao':
        console.log('Uma casa para frente')
        break;
    default:
        console.log('Peça inexistente!')
}