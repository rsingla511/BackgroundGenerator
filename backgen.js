var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.getElementsByTagName("h3")[0];
function setGradient ( ) {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
	 h3.textContent = body.style.background + ";"
}
color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient);

