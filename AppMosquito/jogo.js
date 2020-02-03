
var altura = 0
var largura = 0
var vidas = 1
var tempo = 20

var criaMosquitoTempo = 0

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'facil') {
	criaMosquitoTempo = 1500
} else if ( nivel === 'dificil') {
	criaMosquitoTempo = 1000
} else {
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	largura = window.innerWidth	
	altura = window.innerHeight

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	document.getElementById('cronometro').innerHTML =  tempo
	tempo -= 1

	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = "vitoria.html"
	}

}, 1000)

function posicaoRandomica() {

	// Remover o mosquito anterior (caso exista)
	if (document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if (vidas < 3) {
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
			vidas++
			
		} else {
			window.location.href = 'fim_de_jogo.html'

		}
		
	}
	


	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 50 : posicaoX
	posicaoY = posicaoY < 0 ? 50 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1 '
		
		case 1:
			return 'mosquito2 '

		case 2:
			return 'mosquito3 '
	}
}


function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'
	}
}
