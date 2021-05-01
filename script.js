var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var butt=document.getElementById("random");

body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
butt.addEventListener("click",function(){
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	
	col1="#"+randomColor1;
	col2="#"+randomColor2;
	color1.value=col1;
	color2.value=col2;
	setGradient();



})