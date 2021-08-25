var canvas;
var h1;
function setup() {
	canvas=createCanvas(200, 200);
	background(100);
	canvas.position(0,500);
	h1= createElement("h4","Hello2");
	
}
function mousePressed()
{
createP("My fav color");
}


function draw() {
	ellipse(mouseX, mouseY, 20, 20);
	h1.position(mouseX,mouseY)
	
}