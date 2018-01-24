var startLength;
var scaleFactor;
var minLength;

var angleSlider;

function setup() {
	createCanvas(800, 800);
	angleSlider = createSlider(0, PI, (PI / 4), 0);

	startLength = width / 4;
	scaleFactor = 0.67;
	angle = angleSlider.value();
	minLength = 4;
}

function draw() {
	angle = angleSlider.value();

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