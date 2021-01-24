
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Plane (400, 700, 800, 50);

	hammer = new Hammer (400, 300, 250, 50);

	stone = new Stone (300, 300, 50, 50);

	rubber = new Rubber (400, 300, 20, 20);

	iron = new Iron (500, 300, 100, 100);

	sand1 = new Sand (300, 300, 10, 10);

	sand2 = new Sand (310, 300, 10, 10);

	sand3 = new Sand (320, 300, 10, 10);

	sand4 = new Sand (330, 300, 10, 10);

	sand5 = new Sand (340, 300, 10, 10);

	sand6 = new Sand (350, 300, 10, 10);

	sand7 = new Sand (360, 300, 10, 10);

	sand8 = new Sand (370, 300, 10, 10);

	sand9 = new Sand (380, 300, 10, 10);

	sand10 = new Sand (390, 300, 10, 10);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0, 255, 255);

  ground.display ();
  hammer.display ();
  stone.display ();
  rubber.display ();
  iron.display ();
  sand1.display ();
  sand2.display ();
  sand3.display ();
  sand4.display ();
  sand5.display ();
  sand6.display ();
  sand7.display ();
  sand8.display ();
  sand9.display ();
  sand10.display ();
  
  drawSprites();
 
}



