
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Bodies;

var engine,world;
var ball,ground,log1,log2,log3;

function setup() {
	createCanvas(1200, 400);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,380,1300,10);
	ball = new Wall(50,360,30,30);
	log1 = new Log(800,370,150,10);
	log2 = new Log(725,335,10,70);
	log3 = new Log(875,335,10,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}
