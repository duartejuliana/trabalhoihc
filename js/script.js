
var pts = parseInt(localStorage.getItem("pontos"));

function confere() {
	if (document.getElementById("certo").checked) {
		pts += 10;
		localStorage.setItem("pontos", pts);
	}
}

console.log(localStorage.getItem("pontos"));