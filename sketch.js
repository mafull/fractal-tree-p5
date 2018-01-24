var numTrees;
var startLength;
var scaleFactor;
var angle;
var minLength;

var numTreesInput;
var startLengthSlider;
var scaleFactorSlider;
var angleSlider;

function setup() {
	createCanvas(800, 800);
	numTreesInput = createInput("3");
	numTreesInput.input(inputEvent);
	startLengthSlider = createSlider(0, (width / 3), (width / 5), 0);
	angleSlider = createSlider(0, PI, (PI / 4), 0);

	numTrees = 3;
	scaleFactor = 0.67;
	angle = angleSlider.value();
	minLength = 4;
}

function draw() {
	startLength = startLengthSlider.value();
	angle = angleSlider.value();

	background(51);

	stroke(255);
	translate((width / 2), (height / 2));

	var treeAngle = (2 * PI) / numTrees;
	for(var i = 0; i < numTrees; i++) {
		push();
		rotate(treeAngle * i);
		branch(startLength);
		pop();
	}
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


function inputEvent() {
	console.log(numTreesInput.value());
	numTrees = numTreesInput.value();
}