var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup,blueBubbleGroup,blueBubbleGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2



  bullet = createSprite(10,height/2,05,05);
  bullet.addImage(bulletImg)
  bullet.scale = 0.2;
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
 
  
}

function draw() {
  background("#BDA297");

  if(keyDown("SPACE")){
    shoot()
  }


  
  if(gameState===1){
    gun.y=mouseY  

   if(frameCount%60 === 0){
    drawRedBubbles();
   
   }
   
    if(frameCount%100=== 0){
   drawBlueBubbles();
  }


  if(bulletGroup.isTouching(redBubbleGroup)){
    redBubbleGroup.destroyEach();
   bulletGroup.destroyEach();
  // score=score+1;
  }
  
  if(bulletGroup.isTouching(blueBubbleGroup)){
    blueBubbleGroup.destroyEach();
   bulletGroup.destroyEach();


}
  //display Score and number of lifes

  drawSprites();
  
    


}

function drawRedBubbles(){
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg )
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
 redBubbleGroup.add(redbubble);
  
}

function drawBlueBubbles(){
 
    bluebubble = createSprite(800,random(20,780),40,40);
   bluebubble.addImage(blueBubbleImg )
   bluebubble.scale = 0.1;
   bluebubble.velocityX = -8;
   bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}


function shoot(){

  
  bullet = createSprite(10,height/2,05,05);
  bullet.addImage(bulletImg)
  bullet.scale = 0.2;
  bulletGroup.add(bullet);
  
  bullet.y = gun.y
 // createSprite()
 // bullet.addImage("bullet1.png",bulletImg )
  bullet.velocityX = + 5
}
}