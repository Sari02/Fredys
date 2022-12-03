var bg, bgImg;
var holmes, holmesImg;

let walls;
let wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;

var gameState=0;


function preload(){
//bgImg = loadImage("assets/bg.png")

holmesImg = loadImage("assets/detective.png")
}

function setup(){

  // createCanvas(windowWidth,windowHeight);

  createCanvas(1800,980);

  //background image
  //bg = createSprite(165,485,1,1);
  //bg.addImage(bgImg);
  //bg.scale = 1.3

  holmes = createSprite(900, 350, 20, 20);
  holmes.addImage(holmesImg)
  //holmes.debug = true
  //holmes.setCollider("rectangle",0,0,300,300)

  walls = new Group();

  //horizontales
  wall1 = createSprite(1700, 70, 200,3);
  wall2 = createSprite(800, 140, 1000,3);
  wall3 = createSprite(100, 210, 200,3);
  wall4 = createSprite(550, 280, 300,3);
  wall5 = createSprite(1200, 280, 200,3);
  wall6 = createSprite(450, 420, 300,3);
  wall7 = createSprite(900, 420, 400,3);
  wall13 = createSprite(1700, 420, 200,3);
  wall8 = createSprite(1250, 490, 300,3);
  wall9 = createSprite(200, 630, 200,3);
  wall10 = createSprite(350, 700, 100,3);
  wall11 = createSprite(950, 700, 900,3);
  wall12 = createSprite(100, 770, 200,3);

  walls.add(wall1);
  walls.add(wall2);
  walls.add(wall3);
  walls.add(wall4);
  walls.add(wall5);
  walls.add(wall6);
  walls.add(wall7);
  walls.add(wall8);
  walls.add(wall9);
  walls.add(wall10);
  walls.add(wall11);
  walls.add(wall12);
  walls.add(wall13);

  //verticales
  wall14 = createSprite(200, 910, 3, 140);
  wall15 = createSprite(300, 420, 3, 560);
  wall16 = createSprite(400, 805, 3, 210);
  wall17 = createSprite(600, 35, 3, 70);
  wall18 = createSprite(700, 315, 3, 210);
  wall19 = createSprite(700, 910, 3, 140);
  wall20 = createSprite(900, 630, 3, 140);
  wall21 = createSprite(1100, 630, 3, 140);
  wall22 = createSprite(1100, 280, 3, 280);
  wall23 = createSprite(1200, 105, 3, 70);
  wall24 = createSprite(1400, 420, 3, 560);
  wall25 = createSprite(1600, 210, 3, 280);
  wall26 = createSprite(1700, 770, 3, 420);

  walls.add(wall14);
  walls.add(wall15);
  walls.add(wall16);
  walls.add(wall17);
  walls.add(wall18);
  walls.add(wall19);
  walls.add(wall20);
  walls.add(wall21);
  walls.add(wall22);
  walls.add(wall23);
  walls.add(wall24);
  walls.add(wall25);
  walls.add(wall26);

  wall27 = createSprite(900, 0, 1800, 3);
  wall28 = createSprite(900, 980, 1800, 3);
  wall29 = createSprite(0, 490, 3, 980);
  wall30 = createSprite(1800, 490, 3, 980);

  walls.add(wall27);
  walls.add(wall28);
  walls.add(wall29);
  walls.add(wall30);

  walls.immovable = true;
}

function draw() {
  
  background("black");

  print(holmes.x);
  print(holmes.y);

  //dibujar paredes por coordenadas
  //NO BORRAR SOLO COMENTARLAS CON CONTROL + /, ya que las lineas se dibujan diferente a los sprites
  stroke("white");
  strokeWeight(3);
  //horizontales
  line(1600, 70, 1800, 70);
  line(300, 140, 1300,140);
  line(0, 210, 200, 210);
  line(400, 280, 700, 280);
  line(1100, 280, 1300, 280);
  line(300, 420, 600, 420);
  line(700, 420, 1100, 420);
  line(1600, 420, 1800, 420);
  line(1100, 490, 1400, 490);
  line(100, 630, 300, 630);
  line(300, 700, 400, 700);
  line(500, 700, 1400, 700);
  line(0, 770, 200, 770);

  //verticales
  line(200, 840, 200, 980);
  line(300, 140, 300, 700);
  line(400, 700, 400, 910);
  line(600, 0, 600, 70);
  line(700, 210, 700, 420);
  line(700, 840, 700, 980);
  line(900, 560, 900, 700);
  line(1100, 560, 1100, 700);
  line(1100, 140, 1100, 420);
  line(1200, 70, 1200, 140);
  line(1400, 140, 1400, 700);
  line(1600, 70, 1600, 350);
  line(1700, 560, 1700, 980);

  //bordes
  stroke("red");
  strokeWeight(5);
  line(0,0,1800,0);
  line(0,980,1800,980);
  line(0,0,0,980);
  line(1800,0,1800,980);

        
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

  holmes.collide(walls);


   
  drawSprites();
        
}