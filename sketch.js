const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bird1;
var wall, wall2, wall3;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    ground = new Ground(600,height,1200,20);
    bird1 = new Bird(150, 180);
    wall = new Wall(950, 335, 15, 70);
    wall2 = new Wall(1050, 335, 15, 70);
    wall3 = new Wall(1000, 380, 100, 15);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    
    ground.display();
    bird1.display();
    wall.display();
    wall2.display();
    wall3.display();
}
