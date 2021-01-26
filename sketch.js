
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var cradle1

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cradle1 = new Paper(600,10,65,100)
	cradle2 = new Paper(600,10,65,100)
	cradle3 = new Paper(600,10,65,100)
	cradle4 = new Paper(600,10,65,100)
	cradle5 = new Paper(600,10,65,100)

	rope   = new Rope(cradle1.body,{x:500,y:50})

	noname = new Ground(600,200,520,40)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  cradle1.display()
  cradle2.display()
  cradle3.display()
  cradle4.display()
  cradle5.display()

  rope.display()
  noname.display()
  drawSprites();
 
}



