var bg1,bg1Img,boy1,b;
var invisibleground;



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg1=createSprite(width/2,height/2,width,height)
  bg1.addImage(bg1Img)
  bg1.x = bg1.width/2;
  bg1.scale = 3
  bg1.velocityX =-3;

  boy1= createSprite(width/2-600,height - 90,30,30)
  boy1.addAnimation("gg",b)
  boy1.scale = 2

  invisibleground = createSprite(width/2,height - 0,width,2)
  invisibleground.visible = false
}
function preload(){

  bg1Img=loadImage("b11.JPG")

  b = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png")
}
function draw() {
  background(bg1Img);

  if(bg1.x <0){
  bg1.x = bg1.width/2
 }
 
 if (keyDown("space")){
boy1.velocityY = -15
 }

boy1.velocityY = boy1.velocityY +1

boy1.collide(invisibleground)

  drawSprites();
}