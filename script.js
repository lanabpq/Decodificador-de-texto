const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

document.getElementById("div-aparece").style.display = 'none';

function aparece() {
  	document.getElementById("div-desaparece").style.display = 'none';
  	document.getElementById("div-aparece").style.display = 'block';
}

function btnEncriptar() {
	const textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
	aparece();
}

function btnDesencriptar() {
	const textoDesencriptado = desencriptar(inputTexto.value);
	mensagem.value = textoDesencriptado;
	aparece();
}

function btnCopiar() {
	mensagem.select();
  	navigator.clipboard.writeText(mensagem.value)
  	mensagem.value = "";
}

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encriptar(stringEncriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptada = stringEncriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
			stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		} //vai verificar se tem esse valor dentro da matriz, se tiver ele devolve true
	}

	return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for(let i = 0; i < matrizCodigo.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo[i][1])) {
			stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		} //vai verificar se tem esse valor dentro da matriz, se tiver ele devolve true
	}

	return stringDesencriptada;
}

// para fazer o botão copiar:
// navigator clipboard
// navigator.clipboard.writeText(copyText.value);