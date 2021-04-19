class Stone {
	constructor(x, y) {
	  var options = {
		'density':15,
		'friction': 0.9,
		'restitution':0.8
	  }
	  this.body = Bodies.rectangle(x, y, 20, 30, options);
	  this.width = 20;
	  this.height = 30;
	  World.add(world, this.body);
	}
	display(){
	  var pos = this.body.position;
	  var angle = this.body.angle;
  
	  push();
	  translate(pos.x, pos.y);
	  rotate(angle);
	  strokeWeight(3);
	  stroke('black')
	  fill('white')
	  rectMode(CENTER)
	  rect(0, 0, this.width, this.height);
	  pop();
	}
  }
  