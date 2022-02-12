var START = 2;
var PLAY = 1;
var END = 0;

var gameState = START;

var dodgeball, dodgeball2;
var dodgeballImg, dodgeball2Img;
var birch, ashley;
var birchImg, ashleyImg;
var edges;
var box, boxImg;

function preload() {
  dodgeballImg = loadImage("images/screenshot.png");
  dodgeball2Img = loadImage("images/screenshot 2.png");
  boxImg = loadImage("images/box.png");
}

function setup() {
  createCanvas(1000,500);


  dodgeball = createSprite(150,200);
  dodgeball.addImage(dodgeballImg);
  dodgeball.scale = 0.07;

  dodgeball2 = createSprite(800,200);
  dodgeball2.addImage (dodgeball2Img);
  dodgeball2.scale = 0.07;

  box = createSprite(500,250,60,60);

  birch = createSprite(900,200,40,40);
 
  ashley = createSprite(50,200,40,40);
}

function draw() {  
  if (gameState===START){
    background("pink");
//I am not sure how to do the box and make it go onto 
//the screen. 
    box.addImage (boxImg);

    if(box.isPressed){
      gameState === PLAY;
    }
  }
if (gameState===PLAY)
{
  background("blue");

  edges = createEdgeSprites();

  for (var i = 0; i < 600; i=i+20) {
    line(490,i,490,i+10);
  }

  if (keyDown("space"))
  {
    serve();
  }

  if (keyDown("q"))
  {
    serve2();
  }

  if (keyDown("up"))
  {
    birch.velocityY = birch.velocityY + 1;
  }

  if (keyDown("down"))
  {
    birch.velocityY = birch.velocityY - 1;
  }

  if (keyDown("w"))
  {
    ashley.velocityY = ashley.velocityY + 2;
  }

  dodgeball.bounceOff(edges[0]);
  dodgeball.bounceOff(edges[1]);
  dodgeball.bounceOff(edges[2]);
  dodgeball.bounceOff(edges[3]);
  dodgeball2.bounceOff(edges[0]);
  dodgeball2.bounceOff(edges[1]);  
  dodgeball2.bounceOff(edges[2]);
  dodgeball2.bounceOff(edges[3]);  

  birch.bounceOff(edges[2]);
  birch.bounceOff(edges[3]);  
  ashley.bounceOff(edges[2]);
  ashley.bounceOff(edges[3]);  

  if(dodgeball.isTouching(birch) || dodgeball2.isTouching(birch))
  {
    dodgeball.bounceOff(birch)
    dodgeball2.bounceOff(birch)

  }

  if(dodgeball.isTouching(ashley) || dodgeball2.isTouching(ashley))
  {
    dodgeball.bounceOff(ashley)
    dodgeball2.bounceOff(ashley)

  }

  drawSprites()
}
}

function serve()
{
  dodgeball.velocityX = 3;
  dodgeball.velocityY = 4;
}

function serve2()
{
  dodgeball2.velocityX = 3;
  dodgeball2.velocityY = 4;
}