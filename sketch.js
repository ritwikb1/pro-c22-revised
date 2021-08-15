const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const C = Matter.Constraint;

let engine;
let world;

var roof;
var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	var bob_options = {
		density: 1,
		isStatic: false,
		restitution: 1
	}
	bob1 = Bodies.circle(420, 500, 25,bob_options)
	World.add(world, bob1)
	bob2 = Bodies.circle(420, 500, 25,bob_options)
	World.add(world, bob2)
	bob3 = Bodies.circle(420, 500, 25,bob_options)
	World.add(world, bob3)
	bob4 = Bodies.circle(420, 500, 25,bob_options)
	World.add(world, bob4)
	bob5 = Bodies.circle(420, 500, 25,bob_options)
	World.add(world, bob5)

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,400,20,roof_options);
    World.add(world,roof);

	rope1 = new Rope(bob1, roof, -80, 0)
	rope2 = new Rope(bob2, roof, -40, 0)
	rope3 = new Rope(bob3, roof, 0, 0)
	rope4 = new Rope(bob4, roof, 40, 0)
	rope5 = new Rope(bob5, roof, 80, 0)
	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,400,20);
  ellipse(bob1.position.x,bob1.position.y,50)
  ellipse(bob2.position.x,bob2.position.y,50)
  ellipse(bob3.position.x,bob3.position.y,50)
  ellipse(bob4.position.x,bob4.position.y,50)
  ellipse(bob5.position.x,bob5.position.y,50)

  //call display() to show ropes here
  rope1.show()
  rope2.show()
  rope3.show()
  rope4.show()
  rope5.show()

    //create ellipse shape for multiple bobs here

 
}

function keyPressed()
{
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1, {x:0, y:0}, {x:-50, y:-50});
	}
}