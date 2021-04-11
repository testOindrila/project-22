var starImg , bgImg;
var star , starBody;
var fairy , fairyImg , fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png" , "images/fairyImage2.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() 
{
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(300 , 490);
	fairy.addAnimation("fairyFlying" , fairyImg);
    fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);
}

function draw() 
{
   Engine.update(engine)

   background(bgImg);

   star.x= starBody.position.x 
   star.y= starBody.position.y 

   console.log(star.y);

   fairy.velocityX = 0;
   fairy.velocityY = 0;

   if(keyDown(RIGHT_ARROW))
   {
	   fairy.velocityX = 6;
   } 
   if(keyDown(LEFT_ARROW))
   {
	   fairy.velocityY = -6;
   }
   if(keyDown(DOWN_ARROW))
   {
	   star.velocityY = 3;
   }
   
   if(star.y > 470)
   {
	   star.velocityY = 0;
   }
  drawSprites();

}

