function porcentajeFinal(){

	let valorInicial = parseInt(document.getElementById('a').value);
	let valorFinal = parseInt(document.getElementById('b').value);
	let incrementoFinal = ((valorFinal - valorInicial) / valorInicial) * 100;
	let resultado = document.getElementById('resultado');

	let valorInicialRequerido = parseInt(document.getElementById('a').value.length);
	let valorFinalRequerido = parseInt(document.getElementById('b').value.length);
	

	if (valorInicial < valorFinal && valorInicial != 0) {
		resultado.innerHTML = 'Aumentó un ' + incrementoFinal + '%';
	}
	else if (valorInicial == 0 && valorFinal > 0) {
		resultado.innerHTML = 'Aumentó un ' + valorFinal + '%';
	}
	else if (valorInicial == 0 && valorFinalRequerido == 0) {
		resultado.innerHTML = 'Por favor completar los campos';
	}
	else if (valorInicialRequerido == 0 || valorFinalRequerido == 0) {
		resultado.innerHTML = 'Por favor completar los campos'
	}
	else {
		resultado.innerHTML = 'No incrementó';
	}
}