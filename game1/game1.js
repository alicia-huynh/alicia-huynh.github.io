var ballx = 300; 
var bally = 300;
var ballSize = 75;
var score = 0;
var gameState = "L1";
var screen= 0; 
var img;
var img2;
var img3;
var img5;
var img6;
var img7;
var img8;

function preload(){
  
img= loadImage('corgi.png');
img2= loadImage('Soccer_Ball.png');
img3= loadImage('parkbackground.jpg');
img5= loadImage('Kite.png');
img6= loadImage('soccergoal.jpg');
img7= loadImage('sky.jpg');
img8= loadImage('pizzaparty.jpg');
  
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}// end of setup

function draw() {
  background(220);
  
  if(gameState == "L1"){
  levelOne();
  }
  
  if(gameState == "L2"){
    levelTwo();
  }
  
  if(gameState == "L3"){
    levelThree();
  }
  
  if(gameState == "Win"){
    Win();
  }
  
  text(("Score:"+ score), width/2,40);
}//end of draw



function mouseClicked(){
      gameState = 'L1';
}
function levelOne(){
  
  background(img3);
  fill('#ffffff');
  text("Level 1", width/2,height-20);
  
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
  
}
  
  if(score>5){
  gameState = "L2";
  }
  
 //ellipse(ballx, bally, ballSize, ballSize); 
  image(img, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  line(ballx, bally, mouseX, mouseY);
  
  
}// end of level 1

function levelTwo(){
  background(img6);
   fill('#ffffff');
  text("Level 2", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1; 
  
}
  
  if(score>10){
 gameState= 'L3';
  }
  
  //line(ballx, bally, mouseX, mouseY);
  image(img2, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  
  
}// end of level 2

function levelThree(){
 background(img7);
   fill('#ffffff');
  text("Level 3", width/2,height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if(distToBall < ballSize/2){
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    ballSize =  ballSize - 2;
  
}
  

 image(img5, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);


if(score>44){
  gameState = "Win";
  }
  
}//end of level 3

function Win(){

  fill('#001219');
  background(img8);
  text("You've won! Have a pizza party!", width/2,height-20);
}
