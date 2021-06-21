var bg;
var pingu, pinguImage;
var snowman, snowmanImage
var igloo, iglooImage;
var snowman2,snowman2Img;
var snow = [];
var boys,boysImg;

function preload() {
  bg = loadImage("snow0.png");
  pinguImage = loadImage("pingu.png");
  snowmanImage = loadImage("snowman.png");
  iglooImage = loadImage("igloo.png");
  snowman2Img = loadImage("snowman.gif");
  boysImg = loadImage("boys.png");
}

function setup() {
  createCanvas(1000, 700);
  //createSprite(400, 200, 50, 50);
  
  snowman = createSprite(900, 550);
  snowman.addImage(snowmanImage);
  snowman.scale = 0.4;

  snowman2 = createSprite(300,530);
  snowman2.addImage(snowman2Img);
  snowman2.scale = 0.7;

  boys = createSprite(500,500);
  boys.addImage(boysImg);
  boys.scale = 0.1;

  igloo = createSprite(750, 500);
  igloo.addImage(iglooImage);
  igloo.scale = 0.3;

  pingu = createSprite(150, 500);
  pingu.addImage(pinguImage);
  pingu.scale = 0.4;

  for (var i = 0; i < 15; i++) {
    snow.push(new Snow());
  }
}

function draw() {
  background(bg);
  
  drawSprites();

  for (var i = 0; i < snow.length; i++) {
    snow[i].display();
    snow[i].update();
  }

  
}