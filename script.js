var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient() {
	console.log(color1.value);
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
	console.log(color1.value);
}

function setRandomGradient() {
	color1.value = generateHex();
	color2.value = generateHex();
	console.log(color1.value);
	setGradient();
}
function generateHex() {
	var values = "0123456789ABCDEF";
	var hex = "#";
	for (var i = 0; i < 6; i++) {
		hex = hex + values[Math.floor(Math.random()*16)];
	}
	return hex;
}
window.addEventListener("load", setRandomGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);
