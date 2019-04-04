var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var circles = [];
var boundaries = [];

function setup() {
	createCanvas(500, 500);
	colorMode(HSB);
	engine = Engine.create();
	world = engine.world;
	// Engine.run(engine);
	boundaries.push(new Boundary(80, 100, width, 30, 0.3));
	boundaries.push(new Boundary(250, 350, width, 30, -0.3));
}

function mousePressed() {
	circles.push(new Circle(mouseX, mouseY, random(6, 15)));
}

function draw() {
	background(51);
	Engine.update(engine);
	for (var i = 0; i < circles.length; i++) {
		circles[i].show();
		if (circles[i].isOfScreen()) {
			circles[i].removeFromWorld();
			circles.splice(i, 1);
			i--;
		}
	}
	for (var i = 0; i < boundaries.length; i++) {
		boundaries[i].show();
	}
} 