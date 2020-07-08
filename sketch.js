var car;
var brickWall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  //car.debug = true;
  car.setCollider("rectangle",0,0,50,50);
  brickWall = createSprite(700, 200, 30, 200);
  //brickWall.debug = true;
  brickWall.setCollider("rectangle",0,0,30,200);
  speed = random(50,90);
  weight = random(400,1500);

  car.shapeColor = "blue";
  brickWall.shapeColor = "brown";
}

function draw() {
  background(255,255,255); 

car.velocityX = speed;

car.collide(brickWall);

if(brickWall.x-car.x < car.width/2 + brickWall.width/2) {
  car.velocityX = 0;
  var deformation = (0.5 * weight * speed * speed)/22509;

  if(deformation < 100) {
    car.shapeColor = color(0,255,0);
    car.width = 45;
    car.height = 45;
    car.setCollider("rectangle",0,0,45,45);
  }

  if(deformation > 100 && deformation < 180) {
    car.shapeColor = color(230,230,0);
    car.width = 40;
    car.height = 40;
    car.setCollider("rectangle",0,0,40,40);
  }

  if(deformation > 180) {
    car.shapeColor = rgb(255,0,0);
    car.width = 35;
    car.height = 35;
    car.setCollider("rectangle",0,0,35,35);
  }
}

  drawSprites();
}