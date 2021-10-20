let ground;
let lander;
var lander_img;
var bg_img;
var meteorImg;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("assets/astronaught.png");
  bg_img = loadImage("assets/spacetheme.gif");
}

function setup() {
  createCanvas(1000,500);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  meteor = new Meteor(500,110,130,100,angle);

  rectMode(CENTER);
  textSize(15);
}

function draw() {
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  lander.position.y+=vy;


  meteor.display();





  drawSprites();
}


