var bg, bgImg;
var holmes, holmesImg;

var gameState=0;


function preload(){
//bgImg = loadImage("assets/bg.png")

holmesImg = loadImage("assets/detective.png")
}

function setup(){

  createCanvas(windowWidth,windowHeight);

  //background image
  //bg = createSprite(165,485,1,1);
  //bg.addImage(bgImg);
  //bg.scale = 1.3

  holmes = createSprite(100, 300, 100, 100);
  holmes.addImage(holmesImg)
  //holmes.debug = true
  //holmes.setCollider("rectangle",0,0,300,300)




}

function draw() {
  
  background("black");
        
  //movimiento
  if(keyDown("UP_ARROW")){
    holmes.y = holmes.y-3
  }
  if(keyDown("DOWN_ARROW")){
    holmes.y = holmes.y+3
  }
  if(keyDown("LEFT_ARROW")){
    holmes.x = holmes.x-3
  }
  if(keyDown("RIGHT_ARROW")){
    holmes.x = holmes.x+3
  }


   
  drawSprites();
        
}