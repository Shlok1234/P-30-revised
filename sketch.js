const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball,block,slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Ball(100,100)
    ground = new Ground(1000,170,170,20);
    ground1 = new Ground(800,370,170,20);
    block1 = new Block(750,190,30,50)
    block2 = new Block(780,190,30,50)
    block3 = new Block(810,190,30,50);
    block4 = new Block(840,190,30,50);
    block5 = new Block(765,140,30,50);
    block6 = new Block(795,140,30,50);
    block7 = new Block(825,140,30,50);
    block8 = new Block(780,90,30,50);
    block9 = new Block(810,90,30,50);
    block10 = new Block(795,50,30,50);
    block11 = new Block(985,0,30,50);
    block12 = new Block(1020,0,30,50);
    block13 = new Block(1005,-50,30,50);
    

        
    slingShot = new Slingshot(ball.body,{ x:200,y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    fill("green")
    textSize(20)
    text("Destroy the blocks using the cube ",500,100)
    fill("blue");
    ball.display();
    strokeWeight(4);
    fill("white")
    ground.display()
    ground1.display()
    fill("yellow")
    block1.display();
    block3.display()
    block5.display()
    block7.display();
    block9.display();
    fill("red")
    block6.display();
    block4.display();
    block8.display();
    block2.display();
    block10.display();
    fill("red")
    block11.display();
    block12.display();
    fill("yellow")
    block13.display()
   
    

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}