var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];
var ground;

function setup() {
	createCanvas(400,400);
	colorMode(HSB);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	ground = Bodies.rectangle(200, height, width, 32, {isStatic: true});
	World.add(world, ground);
}

function mousePressed() {
	boxes.push(new Box(mouseX, mouseY, random(10,40), random(10,40)));
}

function draw() {
	background(51);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].show();
	}
	noStroke();
	fill(90);
	rectMode(CENTER);
	rect(ground.position.x, ground.position.y, width, 30);
}