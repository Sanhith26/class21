var fixedRect, movingRect,OB1,OB2,OB3,OB4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  

  OB1=createSprite(100,100,50,50);
  OB1.shapeColor = "blue";
  OB2=createSprite(200,100,50,50);
  OB2.shapeColor = "blue";
  OB3=createSprite(300,100,50,50);
  OB3.shapeColor = "blue";
  OB4=createSprite(400,100,50,50);
  OB4.shapeColor = "blue";

  OB1.velocityX=5
  OB3.velocityX=-5




}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 //if(isTouching(movingRect,OB3)){
  //movingRect.shapeColor = "red";
  //OB3.shapeColor = "red";
 //}
//else {
  //movingRect.shapeColor = "green";
  //OB3.shapeColor = "blue";

  

bounceOff(OB1,OB3)

 
  drawSprites();
  
}


