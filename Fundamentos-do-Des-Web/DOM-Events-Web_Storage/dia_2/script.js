// 1
let h1 = document.createElement('h1')
let contentH1 = document.createTextNode('Exercício 5.2 - JavaScript DOM')
h1.appendChild(contentH1)

document.body.appendChild(h1)

// 2
let addDiv = document.createElement('div')
addDiv.className = 'main-content'

document.body.appendChild(addDiv)

// 3
let addDivChildren = document.createElement('div')
addDivChildren.className = 'center-content'
addDiv.appendChild(addDivChildren)

// 4
let addTagP = document.createElement('p')
addDivChildren.appendChild(addTagP).innerText = 'Apenas testando | Trybe'

// 5
let addDivLeft = document.createElement('div')
addDivLeft.className = 'left-content'
addDiv.appendChild(addDivLeft)

// 6
let addDivRight = document.createElement('div')
addDivRight.className = 'right-content'
addDiv.appendChild(addDivRight)

// 7
let image = document.createElement('img')
image.src = 'https://picsum.photos/200'
image.classList = 'small-image'
addDivLeft.appendChild(image)

// 8
let valores = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
let listUl = document.createElement('ul')

for (let i = 0; i < valores.length; i++) {
    let nums = valores[i]
    
    let listLi = document.createElement('li')
    listLi.innerHTML = nums

    listUl.appendChild(listLi)    
}

addDivRight.appendChild(listUl)

// 9 
let tagH3_1 = document.createElement('h3')
tagH3_1.innerText = 'Classe 1'
addDiv.appendChild(tagH3_1)
let tagH3_2 = document.createElement('h3')
addDiv.appendChild(tagH3_2)
tagH3_2.innerText = 'Classe 2'
let tagH3_3 = document.createElement('h3')
addDiv.appendChild(tagH3_3)
tagH3_3.innerText = 'Classe 3'

// ---------------------

// 1
h1.className = 'title'

// 2
tagH3_1.className = 'description'
tagH3_2.className = 'description'
tagH3_3.className = 'description'

// 3
addDiv.removeChild(addDivLeft)

// 4
addDivRight.style.marginRight = 'auto'

// 5
addDivChildren.parentNode.style.backgroundColor = 'green'

// 6
let ul = document.querySelector('ul')

let remove10 = document.querySelector('.right-content').firstChild.lastChild

ul.removeChild(remove10)

let remove09 = document.querySelector('.right-content').firstChild.lastChild

ul.removeChild(remove09)