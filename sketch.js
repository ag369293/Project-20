var astronaut;
var bg_img;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;



function preload(){
  bg_img = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  move = loadAnimation("move1.png","move2.png");
  bath = loadAnimation("bath1.png","bath2.png");
}




function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
 
}

function draw() {
  background(bg_img);
  
  stroke(10);
  fill("white");
  textSize(16);
  text("Instructions:Use Arrow Keys and M key to see Astronaut's Daily Routine" ,160,60);

  

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 300;
    astronaut.x = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown("Left_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.y = 200;
    astronaut.x = 370;
    astronaut.velocityX = 2;
    astronaut.velocityY = 2;
  }

 edges = createEdgeSprites(); 
  astronaut.bounceOff(edges);
 
    drawSprites();
}