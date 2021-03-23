// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const calcFatorial = (num) => {
    let fat = num
    let res = fat
    for (let i = 1; i < fat; i += 1) {
        res *= i
    }
    return res
}

console.log(calcFatorial(5))

// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.
let longestWord = "Antônio foi no banheiro e não sabemos o que aconteceu"

const maiorPalavra = () => {
    let palavra = longestWord.split(' ');
    let mostBigWord = '';
    for (let i = 0; i < palavra.length; i += 1) {
        let tam = palavra[i].length
        if (mostBigWord.length < tam) {
            mostBigWord = palavra[i]
        }
    }

    return mostBigWord;
}

console.log(maiorPalavra())

// 3 - Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.getElementById('btn-1');
let clickCount = document.getElementById('count');

button.addEventListener('click', () => {
    clickCount.innerHTML = parseFloat(clickCount.innerHTML) + 1;
})

// 4 - Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

const stringTeste = 'Tryber x aqui!'
const changeToX = (string) => {
    let stringRetornada =  stringTeste.replace('x', string)
    return stringRetornada;
}

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Node']

const funcao2 = (string) => {
    let ordemAlfabetica = skills.sort()
    return `${string}, minhas cinco principais habilidades são: ${ordemAlfabetica}`
}

console.log(funcao2(changeToX('Thiago')));