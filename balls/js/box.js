function Circle(x, y, r) {
	var options = {
		friction: 0,
		restitution: 0.5
	}
	this.hue = random(110);
	this.body = Bodies.circle(x, y, r, options);
	this.r = r;
	World.add(world, this.body);

	this.isOfScreen = function() {
		var pos = this.body.position;
		return (pos.y > height + 100);
	}

	this.removeFromWorld = function() {
		World.remove(world, this.body);
	}

	this.show = function() {
		var pos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(pos.x, pos.y);
		rotate(angle);
		rectMode(CENTER);
		strokeWeight(1);
		stroke(0);
		fill(this.hue, 255, 255);
		ellipse(0, 0, this.r * 2);
		pop();
	}
} 