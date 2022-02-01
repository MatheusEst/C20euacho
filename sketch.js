
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola,doidera,kk,a
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var b = {
		restitution:0.4
	}
	fill("blue")
	bola = Bodies.circle(200,200,20,b);
	World.add(world,bola);
	kk = Bodies.rectangle(100,100,40,40);
	World.add(world,kk);
	doidera = Bodies.circle(400,300,50,100);
	World.add(world,doidera);
	var v = {
		isStatic:true
	}
	a = Bodies.rectangle(400,480,999,10,v)
	World.add(world,a)

  
}


function draw() {
  rectMode(CENTER);
 Engine.update(engine)
  background("white");

  ellipse(bola.position.x,bola.position.y,20)
  rect(kk.position.x,kk.position.y,40,40)
  rect(doidera.position.x,doidera.position.y,50,100)
  rect(a.position.x,a.position.y,999,10) 
  drawSprites();
  
}



