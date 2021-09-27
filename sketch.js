const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var edges;

var waterImage,bgImage,fishImg;
var water,fish;
var waterLevel;

function preload() {

    waterImage=loadImage("Images/1.jpg");
    bgImage=loadImage("Images/grass.jpg");
    fishImg=loadImage("Images/fish3.png");

    
}

function setup(){
    var canvas = createCanvas(windowWidth-150,windowHeight-100);
    engine = Engine.create();
    world = engine.world;

    //to create water background
    water=createSprite(width/2,height/2,width-100,height-20);
    water.addImage("waterImage",waterImage);
    water.scale=3;
    water.velocityX=-2;

    //to create waterLevel sprite
    waterLevel=createSprite(width/2,height/4+60,width,1);
    waterLevel.visible=false;

    //create fish sprite
    fish=createSprite(120,200,40,40);
    fish.addImage("fishImg",fishImg);
    fish.scale=0.08;
    
    edges=createEdgeSprites();

    

}

function draw(){
    background(bgImage);

    //to reset the backgrounjd to center
    if(water.x<(width/2)-500){
    water.x=width/2;
    }
  
    //to collide fish with edges
    fish.collide(edges[0]);
    fish.collide(edges[1]);
    fish.collide(edges[2]);
    fish.collide(edges[3]);
    fish.collide(waterLevel);
   
    drawSprites();
}

function keyPressed(){

    //for up arrow
    if(keyCode===38){
        fish.velocityY=-2;
        fish.velocityX=0;
    }
    if(keyCode===DOWN_ARROW){
        fish.velocityY=2;
        fish.velocityX=0;
    }
    if(keyCode===RIGHT_ARROW){
        fish.velocityY=0;
        fish.velocityX=2;
    }
    if(keyCode===LEFT_ARROW){
        fish.velocityY=0;
        fish.velocityX=-2;
    }
}