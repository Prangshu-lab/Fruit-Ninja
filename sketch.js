var score = 0;

var sword,swordImage,f1,f1Image,f2,f2Image,f3,f3Image,f4,f4Image,b1,b1Image,b2,b2Image,gameover,gameoverImage,cutsound,endsound;
var PLAY = 1;
var END = 0;

var gameState = PLAY;
function preload(){
swordImage = loadImage("sword.png"); 
  f1Image = loadImage("fruit1.png"); 
  f2Image = loadImage("fruit2.png"); 
  f3Image = loadImage("fruit3.png"); 
  f4Image = loadImage("fruit4.png"); 
  b1Image = loadImage("alien1.png");
  b2Image = loadImage("alien2.png");
  gameoverImage = loadImage("gameover.png");
  cutsound=loadSound("knifeSwooshSound.mp3");
  endsound=loadSound("gameover.mp3");
}
function setup() {
createCanvas(1000,460);
gameover = createSprite(330,200,20,20); 
gameover.addImage(gameoverImage);  
gameover.scale = 3;
gameover.visible=false;
sword = createSprite(200,200,20,20);  
sword.addImage(swordImage);  
sword.scale=0.6;  
f1 = createSprite(random(100,200),-30,20,20);  
f1.addImage(f1Image);  
f1.scale=0.3; 
f2 = createSprite(random(100,200),-30,20,20);  
f2.addImage(f2Image);  
f2.scale=0.3;
f3 = createSprite(random(300,400),-30,20,20);  
f3.addImage(f3Image);  
f3.scale=0.3;
f4 = createSprite(random(300,400),-30,20,20); 
f4.addImage(f4Image);  
f4.scale=0.3; 
b1 = createSprite(random(300,400),-30,20,20); 
b1.addImage(b1Image);  
b1.scale=1.3; 
b2 = createSprite(random(300,400),-30,20,20); 
b2.addImage(b2Image);  
b2.scale=1.3;    
}
  function draw(){
background('violet');  
if(gameState===PLAY){
   sword.x=mouseX;
sword.y=mouseY;
movement();
returnback()
swordtouch()
}
if(gameState===END){
f1.visible=false;  
f2.visible=false; 
f3.visible=false; 
f4.visible=false; 
b1.visible=false; 
b2.visible=false; 
sword.visible=false;  
gameover.visible=true;
textSize(30);
text(" press space to restart",180,300);
} 
if(mousePressedOver(gameover)&&gameState===END){
endsound.play();   
   }
reset()
fast();
    drawSprites();  
textSize(100);
text(score,300,100);

}
function movement(){
f1.velocityY=random(13,15);
f2.velocityY=random(13,15);
f3.velocityY=random(13,15);
f4.velocityY=random(13,15);
b1.velocityY=random(13,15);  
b2.velocityY=random(13,15);  
}
function returnback(){
if(f1.y>500){
f1.y=random(-50,10); 
f1.x=random(10,150)  
  } 
  if(f2.y>500){
f2.y=random(-50,10);      
  f2.x=random(150,250) 
  }
if(f3.y>500){
f3.y=random(-50,10);      
f3.x=random(250,350)   
} 
  if(f4.y>500){
f4.y=random(-50,10);      
f4.x=random(350,450)   
  }
if(b1.y>500){
b1.y=-30      
b1.x=random(0,500)   
  } 
  if(b2.y>500){
b2.y=-30      
b2.x=random(0,500)   
  } 
}
function returnback1(){
f1.y=-150; 
f1.x=random(10,150)    
}
function returnback2(){
f2.y=-150;      
  f2.x=random(150,250)  
}
function returnback3(){
f3.y=-150;       
f3.x=random(250,350)   
}
function returnback4(){
f4.y=-150; 
f4.x=random(350,450)  
}
function swordtouch(){
 if(sword.isTouching(f1)){
  score = score+1;
  
   returnback1();  
cutsound.play();
 }
  if(sword.isTouching(f2)){
  score = score+1;
  
    returnback2();  
  cutsound.play();
  }
   if(sword.isTouching(f3)){
  score = score+1;
    
     returnback3();  
  cutsound.play();
   }
  if(sword.isTouching(f4)){
  score = score+1;
   
    returnback4();  
  cutsound.play();
  }
 if(sword.isTouching(b1)||sword.isTouching(b2)){
cutsound.play();
gameState = END;  
 }
}
function reset(){
  if(keyDown("space")&&gameState===END){
  gameState=PLAY;      
f1.visible=true;  
f2.visible=true; 
f3.visible=true; 
f4.visible=true; 
b1.visible=true; 
b2.visible=true; 
sword.visible=true;  
gameover.visible=false;
score = 0;
}
}
function fast(){
if(score>10){
movement2();   
}
 if(score>15){
movement3();   
} 
   if(score>20){
movement4();   
} 
}
function movement2(){
f1.velocityY=random(18,22);
f2.velocityY=random(18,22);
f3.velocityY=random(18,22);
f4.velocityY=random(18,22);
b1.velocityY=random(18,22);  
b2.velocityY=random(18,22);  
}
function movement3(){
f1.velocityY=random(22,25);
f2.velocityY=random(22,25);
f3.velocityY=random(22,25);
f4.velocityY=random(22,25);
b1.velocityY=random(22,25);  
b2.velocityY=random(22,25);  
}
function movement4(){
f1.velocityY=random(25,30);
f2.velocityY=random(25,30);
f3.velocityY=random(25,30);
f4.velocityY=random(25,30);
b1.velocityY=random(25,30);  
b2.velocityY=random(25,30);  
}