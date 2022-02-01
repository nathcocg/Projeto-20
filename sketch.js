
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var ground;
var block1, block2, block3;

function preload()
{
	
}

function setup() {
	createCanvas(600,600);


	engine = Engine.create();
	world = engine.world;

	var groundOp = {
      isStatic:true 
	}
	ground = Bodies.rectangle(300,590,600,20,groundOp);
	World.add(world, ground);

    var block1Op = {
		restitution:1,
		friction:0.05,
		frictionAir:0.7
	}

	block1 = Bodies.rectangle(100,100,80,40,block1Op);
	World.add(world, block1);

	var block2Op = {
		restitution:0.5,
		friction:0.1,
		frictionAir:0.5
	}

	block2= Bodies.rectangle(200,250,60,60, block2Op);
	World.add(world, block2);

	var block3Op = {
		restitution:0.1,
		friction:0.07,
		frictionAir:0
	}

	block3 = Bodies.circle(300,350,40,block3Op);
	World.add(world, block3);


	Engine.run(engine);
	
	rectMode(CENTER);
    ellipseMode(RADIUS);
  
}


function draw() {
  background("green");
  Engine.update(engine);
  fill("red");
  
  rect(ground.position.x, ground.position.y,600,20);
  rect(block1.position.x,block1.position.y,80,40);
  rect(block2.position.x,block2.position.y,60,60);
  ellipse(block3.position.x,block3.position.y,40);
  
  drawSprites();
 
}



