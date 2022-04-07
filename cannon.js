const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var tower;
var cannon;

function preload() {
 backgroundIMG= loadImage("assets/background.gif");
 towerIMG= loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
angleMode(DEGREES);

  cannon=new Cannon(180,110,130,100,20);
 options={
 isStatic:true 
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower= Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);

 canonball= new cannonball(cannon.x,cannon.y);
}

function draw() {
  background(189);
  image(backgroundIMG,0,0,1200,600);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 push();
 imageMode(CENTER);
 image(towerIMG,tower.position.x,tower.position.y,160,310);
 pop();
  cannon.display(); 
  canonball.display();
}

function keyReleased(){
  if(keyCode===DOWN_ARROW){
    canonball.shoot();
  }
}
