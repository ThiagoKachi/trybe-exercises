function backgroundColor(color) {
	let backgroundColor = document.querySelectorAll('#backgroundColor button')

	for (let i = 0; i < backgroundColor.length; i++) {
		backgroundColor[i].addEventListener('click', function() {
			if (backgroundColor[i].innerText == 'Preto') {
				color = 'black'
				document.body.style.backgroundColor = 'black'
				localStorage.setItem('cor', color)
			} 
			if (backgroundColor[i].innerText == 'Branco') {
				color = 'white'
				document.body.style.backgroundColor = 'white'
				localStorage.setItem('cor', color)
			} 
			if (backgroundColor[i].innerText == 'Amarelo') {
				color = 'yellow'
				document.body.style.backgroundColor = 'yellow'
				localStorage.setItem('cor', color)
			} 
			if (backgroundColor[i].innerText == 'Azul') {
				color = 'blue'

				document.body.style.backgroundColor = 'blue'
				localStorage.setItem('cor', color)
			} 
			if (backgroundColor[i].innerText == 'Cinza') {
				color = 'gray'
				document.body.style.backgroundColor = 'gray'
				localStorage.setItem('cor', color)
			}
		})
	}
	document.body.style.backgroundColor = localStorage.cor

}

backgroundColor()


function textColor(color) {
	let textColor = document.querySelectorAll('#textColor button')
	let article = document.querySelector('article')

	for (let i = 0; i < textColor.length; i++) {
		textColor[i].addEventListener('click', function() {
			if (textColor[i].innerText == 'Preto') {
				color = 'black'
				article.style.color = 'black'
				localStorage.setItem('corFonte', color)
			} 
			if (textColor[i].innerText == 'Branco') {
				color = 'white'
				article.style.color = 'white'
				localStorage.setItem('corFonte', color)
			} 
			if (textColor[i].innerText == 'Amarelo') {
				color = 'yellow'
				article.style.color = 'yellow'
				localStorage.setItem('corFonte', color)
			} 
			if (textColor[i].innerText == 'Azul') {
				color = 'blue'
				article.style.color = 'blue'
				localStorage.setItem('corFonte', color)
			} 
			if (textColor[i].innerText == 'Cinza') {
				color = 'gray'
				article.style.color = 'gray'
				localStorage.setItem('corFonte', color)
			}
		})
	}
	article.style.color = localStorage.corFonte
}

textColor()

// ----------

function fontSize(tam) {
	let fontSize = document.querySelectorAll('#fontSize button')
	let article = document.querySelector('article')

	for (let i = 0; i < fontSize.length; i++) {
		fontSize[i].addEventListener('click', function() {
			if (fontSize[i].innerText == '20px') {
				tam = '20px'
				article.style.fontSize = '20px'
				localStorage.setItem('tamFonte', tam)
			} 
			if (fontSize[i].innerText == '24px') {
				tam = '24px'
				article.style.fontSize = '24px'
				localStorage.setItem('tamFonte', tam)
			} 
			if (fontSize[i].innerText == '28px') {
				tam = '28px'
				article.style.fontSize = '28px'
				localStorage.setItem('tamFonte', tam)
			} 
			if (fontSize[i].innerText == '32px') {
				tam = '32px'
				article.style.fontSize = '32px'
				localStorage.setItem('tamFonte', tam)
			} 
			if (fontSize[i].innerText == '40px') {
				tam = '40px'
				article.style.fontSize = '40px'
				localStorage.setItem('tamFonte', tam)
			}
		})
	}
	article.style.fontSize = localStorage.tamFonte
}

fontSize()

// ----------
function lineHeight(tam) {
	let lineHeight = document.querySelectorAll('#lineHeight button')
	let article = document.querySelector('article')

	for (let i = 0; i < lineHeight.length; i++) {
		lineHeight[i].addEventListener('click', function() {
			if (lineHeight[i].innerText == '30px') {
				tam = '30px'
				article.style.lineHeight = '30px'
				localStorage.setItem('lineH', tam)
			} 
			if (lineHeight[i].innerText == '40px') {
				tam = '40px'
				article.style.lineHeight = '40px'
				localStorage.setItem('lineH', tam)
			} 
			if (lineHeight[i].innerText == '46px') {
				tam = '46px'
				article.style.lineHeight = '46px'
				localStorage.setItem('lineH', tam)
			} 
			if (lineHeight[i].innerText == '50px') {
				tam = '50px'
				article.style.lineHeight = '50px'
				localStorage.setItem('lineH', tam)
			} 
			if (lineHeight[i].innerText == '60px') {
				tam = '60px'
				article.style.lineHeight = '60px'
				localStorage.setItem('lineH', tam)
			}
		})
	}
	article.style.lineHeight = localStorage.lineH
}

lineHeight()

// -------------
function fontFam(estilo) {
	let fontFamily = document.querySelectorAll('#fontFamily button')
	let article = document.querySelector('article')

	for (let i = 0; i < fontFamily.length; i++) {
		fontFamily[i].addEventListener('click', function() {
			if (fontFamily[i].innerText == 'Arial') {
				estilo = 'Arial'
				article.style.fontFamily = 'Arial'
				localStorage.setItem('fontStyle', estilo)
			} 
			if (fontFamily[i].innerText == 'Impact') {
				estilo = 'Impact'
				article.style.fontFamily = 'Impact'
				localStorage.setItem('fontStyle', estilo)
			} 
			if (fontFamily[i].innerText == 'Fantasy') {
				estilo = 'fantasy'
				article.style.fontFamily = 'fantasy'
				localStorage.setItem('fontStyle', estilo)
			} 
			if (fontFamily[i].innerText == 'Monospace') {
				estilo = 'monospace'
				article.style.fontFamily = 'monospace'
				localStorage.setItem('fontStyle', estilo)
			} 
			if (fontFamily[i].innerText == 'Sans-serif') {
				estilo = 'sans-serif'
				article.style.fontFamily = 'sans-serif'
				localStorage.setItem('fontStyle', estilo)
			}
		})
	}
	article.style.fontFamily = localStorage.fontStyle
}

fontFam()
