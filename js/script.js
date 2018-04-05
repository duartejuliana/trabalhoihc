
var pts = parseInt(localStorage.getItem("pontos"));

function confere(jogo) {
	if (document.getElementById("certo").checked) {
		pts += 10;
		localStorage.setItem("pontos", pts);
	}

	if (jogo) {
		ga('send', 'event', jogo, 'pontos', pts);
	}
}

console.log(localStorage.getItem("pontos"));

function verResultado () {
	document.getElementById("resultado").innerHTML = localStorage.getItem("pontos");
}