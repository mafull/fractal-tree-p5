var startLength;
var scaleFactor;
var minLength;

function setup() {
	createCanvas(800, 800);

	startLength = width / 4;
	scaleFactor = 0.67;
	angle = (PI / 5);
	minLength = 4;
}

function draw() {
	background(51);

	stroke(255);
	translate((width / 2), height);
	branch(startLength);
}


function branch(length) {
	line(0, 0, 0, -length);
	translate(0, -length);

	if(length > minLength) {
		push();		
		rotate(angle);
		branch(length * scaleFactor);
		pop();

		push();
		rotate(-angle);
		branch(length * scaleFactor);
		pop();
	}
}