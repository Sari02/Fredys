var bg, bgImg;
var holmes, holmesImg;
var repartidor,repartidorImg, pizza, pizzaImg, dinero, dineroImg;
var llaveroja, llaverojaImg, llaveazul, llaveazulImg, llaveverde, llaveverdeImg;
var puerta, puertaImg, librero, libreroImg, estante, estanteImg, alacena, alacenaImg;
var freddy, freddyImg, palanca, palancaImg;
var cofre, cofre2, cofreImg, cajapizza, cajapizzaImg, ataud, ataudImg, caja, cajaImg;
let walls;
let wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30;

var gameState=0;

var banderaKeyRed = false;
var banderaKeyBlue = false;
var banderaKeyGreen = false;
var banderaDinero = false;
var counterWalls = 0;
var counterWalk = 0;
var nivelSusto = 0;


function preload(){

  holmesImg = loadImage("assets/detective.png");
  repartidorImg = loadImage("assets/repartidor.png");
  freddyImg = loadImage("assets/freddys.png");
  pizzaImg = loadImage("assets/pizza.png");
  dineroImg = loadImage("assets/dinero.png"); 
  llaverojaImg = loadImage("assets/llaveroja.png");
  llaveazulImg = loadImage("assets/llaveazul.png");
  llaveverdeImg = loadImage("assets/llaveverde.png");
  palancaImg = loadImage("assets/palanca.png");
  puertaImg = loadImage("assets/puerta.png");
  libreroImg = loadImage("assets/librero.png");
  estanteImg = loadImage("assets/estante.png");
  alacenaImg = loadImage("assets/alacena.png");
  cofreImg = loadImage("assets/cofre.png");
  cajapizzaImg = loadImage("assets/cajapizza.png");
  cajaImg = loadImage("assets/caja.png");
  ataudImg = loadImage("assets/ataud.png");
}

function setup(){

  // createCanvas(windowWidth,windowHeight);

  createCanvas(1800,980);
//Sprites
  holmes = createSprite(100, 100, 20, 20);
  holmes.addImage(holmesImg);

  repartidor = createSprite(950, 280, 20, 20);
  repartidor.addImage(repartidorImg);

  freddy = createSprite(1180, 910, 20, 20);
  freddy.addImage(freddyImg);

  llaveazul = createSprite(1750, 930, 20, 20);
  llaveazul.addImage(llaveazulImg);
  llaveazul.scale = 0.5;
  cofre = createSprite(1750, 930, 20, 20);
  cofre.addImage(cofreImg);
  llaveroja = createSprite(1340, 640, 20, 20);
  llaveroja.addImage(llaverojaImg);
  llaveroja.scale = 0.5;
  alacena = createSprite(1340, 640, 20, 20);
  alacena.addImage(alacenaImg);
  llaveverde = createSprite(80, 910, 20, 20);
  llaveverde.addImage(llaveverdeImg);
  llaveverde.scale = 0.5;
  ataud = createSprite(80, 910, 20, 20);
  ataud.addImage(ataudImg);
  palanca = createSprite(845, 270, 20, 20);
  palanca.addImage(palancaImg);
  palanca.scale = 0.5;
  cajapizza = createSprite(845, 270, 20, 20);
  cajapizza.addImage(cajapizzaImg);
  dinero = createSprite(1700, 120, 20, 20);
  dinero.addImage(dineroImg);
  dinero.scale = 0.5;
  cofre2 = createSprite(1700, 120, 20, 20);
  cofre2.addImage(cofreImg);

  puerta = createSprite(30, 90, 20, 20);
  puerta.addImage(puertaImg);

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
  textSize(20);
  text("La puerta esta lockeada, encuentra la llave que la abre",100,20);
  text("Porcentaje de susto: " + nivelSusto/3, 1500, 20);

  //inventario


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

        
  //movimiento , con chequeo de bandera azul para mover a freedy hacia la puerta
  if(keyDown("UP_ARROW")){
    holmes.y = holmes.y-3
    if(banderaKeyBlue){
      counterWalk ++;
      if(counterWalk >= 15){
        moveFreedy();
        counterWalk = 0;
      }
    }
  }

  if(keyDown("DOWN_ARROW")){
    holmes.y = holmes.y+3
    if(banderaKeyBlue){
      counterWalk ++;
      if(counterWalk >= 15){
        moveFreedy();
        counterWalk = 0;
      }
    }
  }

  if(keyDown("LEFT_ARROW")){
    holmes.x = holmes.x-3
    if(banderaKeyBlue){
      counterWalk ++;
      if(counterWalk >= 15){
        moveFreedy();
        counterWalk = 0;
      }
    }
  }

  if(keyDown("RIGHT_ARROW")){
    holmes.x = holmes.x+3
    if(banderaKeyBlue){
      counterWalk ++;
      if(counterWalk >= 15){
        moveFreedy();
        counterWalk = 0;
      }
    }
  }

  //jugabilidad
  if((holmes.isTouching(cofre))&&(banderaKeyRed)){
    cofre.visible = false;
    banderaKeyBlue = true;
    moveFreedy();
  }

  if((holmes.isTouching(cofre2))&&(banderaKeyGreen)){
    cofre2.visible = false;
    banderaDinero = true;
    moveFreedy();

  }

  if(holmes.isTouching(alacena)){
    alacena.visible = false;
    banderaKeyRed = true;
    alacena.destroy();
    moveFreedy();
  }

  //move freedy cada 10 milisecs que toques una pared
  if(holmes.isTouching(walls)){
    counterWalls ++;
    if(counterWalls >= 10){
      moveFreedy();
      counterWalls = 0;
    }
  }

  //nivel de susto de holmes cuando toca a Freedy
  if(holmes.isTouching(freddy)){
    nivelSusto ++;
  }

  //GAME OVER cuando el susto llega a 100, puede ser mas de 100 en caso de subirlo a 200 poner en el text "nivelSusto/2"
  if(nivelSusto >= 300){
    textSize(200);
    stroke("red");
    text("Perdiste",600,500);
  }

  holmes.collide(walls);


   
  drawSprites();
        
}

// movimiento de freedy , respecto a la posicion de holmes
function moveFreedy(){
  freddy.x = random(0, holmes.x);
  freddy.y = random(0, holmes.y);
};