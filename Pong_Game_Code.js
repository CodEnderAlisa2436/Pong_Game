var ball = createSprite(200,200,10,10);
var paddle = createSprite(5,200,10,105);
var paddle2 = createSprite(395,200,10,105);
var cs = 0;
var gamestate = "serve";
ball.setAnimation("goldcoin");
paddle2.setAnimation("spring");
paddle.setAnimation("spring2");
paddle.shapeColor="black";
paddle2.shapeColor="black";
ball.shapeColor="blue";
function draw() {
  background("cyan");
  paddle2.y=World.mouseY;
  paddle.y=  ball.y;
  for(var num = 0;num<400;num=num+20){
  line(200,num,200,num+10);
  }
  if(ball.x>=400){
    cs+=1;
  }
  if(ball.x>=400){
    ball.x=200;
    ball.y=200;
    gamestate = "serve";
    ball.velocityY=0;
    ball.velocityX=0;
  }
  if(ball.isTouching(paddle)||ball.isTouching(paddle2)){
    playSound("sound://category_alerts/airy_bell_notification.mp3");
  }
  if (cs==10){
    var bar = createSprite(200,200,800,800);
    bar.setAnimation("gameover");
    ball.velocityX=0;
    ball.velocityY=0;
  }
  if (keyDown("space")&gamestate=="serve"){
  ball.velocityX=5;
  ball.velocityY=6;
  gamestate = "play";
  }
  if (gamestate=="serve"){
  text("Press spacebar to serve",140,30);
  }
  text(cs,175,10);
  text("0",225,10);
 drawSprites(); 
 ball.bounceOff(paddle);
 ball.bounceOff(paddle2);
 createEdgeSprites();
 ball.bounceOff(topEdge);
 ball.bounceOff(bottomEdge);
}