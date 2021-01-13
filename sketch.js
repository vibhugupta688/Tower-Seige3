const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;

var player;

var ball;
var hexaImg;

var score = 0;
var tries = 0;
var x = 1000;

var gameState = "onSling";

var backgroundImg;
var bg = "000000.png";

function preload() {
  hexaImg = loadImage("hexagon (1).png");
  getTime();
}


function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = engine.world;

  block1 = new Block(600-30,260+120,30,40);
  block2 = new Block(570-30,260+120,30,40);
  block3 = new Block(540-30,260+120,30,40);
  block4 = new Block(630-30,260+120,30,40);
  block5 = new Block(660-30,260+120,30,40);
  block6 = new Block(585-30,220+120,30,40);
  block7 = new Block(555-30,220+120,30,40);
  block8 = new Block(615-30,220+120,30,40);
  block9 = new Block(645-30,220+120,30,40);
  block10 = new Block(600-30,170+120,30,40);
  block11 = new Block(570-30,180+120,30,40);
  block12 = new Block(630-30,180+120,30,40);
  block13 = new Block(600-30,140+120,30,40);

  stand1 = new Ground(600-30,285+120,200,10);

  stand2 = new Ground(900-30,195,200,10);

  ground = new Ground(width/2, 600, width, 50)

  block14 = new Block(900-30,170,30,40);
  block15 = new Block(930-30,170,30,40);
  block16 = new Block(870-30,170,30,40);
  block17 = new Block(840-30,170,30,40);
  block18 = new Block(960-30,170,30,40);

  block19 = new Block(900-30,140,30,40);
  block20 = new Block(930-30,140,30,40);
  block21 = new Block(870-30,140,30,40);

  block22 = new Block(900-30,110,30,40);

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world, ball);

  sling = new Chain(this.ball,{x:150, y:160});
}


function draw() {
  background("black");

  Engine.update(engine);

  fill("mediumorchid");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("darkorchid");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("darkviolet");
  block10.display();
  block11.display();
  block12.display();

  fill("darkmagenta");
  block13.display();

  fill("violet");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("magenta");
  block19.display();
  block20.display();
  block21.display();

  fill("deeppink");
  block22.display();

  stand1.display();
  stand2.display();

  ground.display();

  imageMode(CENTER);
  image(hexaImg, ball.position.x, ball.position.y, 40, 40);

  sling.display();

  textSize(40);
  strokeWeight(2);
stroke("red")
  fill("lightcoral");
  text("Score : " +score, 530, 500);
  text("Tries : " +tries, 330, 500);
  textSize(30)
  text("Note : Try to destroy all the blocks in 10 tries, drag and aim the blocks & press space for another try" , x, 35);
  x = x-2;


  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();



}


function mouseDragged() {
  if(gameState !== "launched") {
    Matter.Body.setPosition(this.ball, {x: mouseX, y: mouseY});
  }
}


function mouseReleased() {
  sling.fly();
  gameState = "launched";
  tries = tries+1;  
}


function keyPressed() {
	if(keyCode === 32 && gameState === "launched")
	{
		Matter.Body.setPosition(this.ball,{x:150, y:160})
    sling.attach(this.ball);
    gameState = "onSling";
	}
}

