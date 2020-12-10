var ground,ball,side1,side2,side3;

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

	//Create the Bodies Here.


	Engine.run(engine);

	ground = new Ground(400,680,800,40);
	ball = new Ball(200,100,30);

	side1 = new Bin(600,645,200,30);
	side2 = new Bin(500,585,30,150);
	side3 = new Bin(700,585,30,150);
  
}


function draw() {
background(0);
  
ground.display();
ball.display();
side1.display();
side2.display();
side3.display();
 
}

function keyPressed(){
if(keyCode === 32){
Matter.Body.applyForce(ball.body, ball.body.position, {x:100, y: -160})
}	
}



