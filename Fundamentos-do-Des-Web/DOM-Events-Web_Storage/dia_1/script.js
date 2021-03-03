/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

// 1
function future() {
    document.getElementsByTagName('p')[1].innerHTML = 'Espero estar muito bem, empregado e respiando programação'
}

future()

// 2
function ChangeColorYellow() {
    document.getElementsByTagName('div')[0].style.backgroundColor = 'rgb(76,164,109)'
}

ChangeColorYellow()

// 3
function changeColorRed() {
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white'
}

changeColorRed()

// 4
function correctText() {
    document.getElementsByTagName('h1')[0].innerHTML = 'Exercício 5.1 - JavaScript'
}

correctText()

// 5
function pToUpper() {
    document.getElementsByTagName('p')[0].style.textTransform = "uppercase"
}

pToUpper()

// 6
function consoleP() {
    let pConsole1 = document.getElementsByTagName('p')[0].innerText
    let pConsole2 = document.getElementsByTagName('p')[1].innerText
    let pConsole3 = document.getElementsByTagName('p')[2].innerText
    console.log(pConsole1, pConsole2, pConsole3)
}

consoleP()