var bgImage;
var cat,catImg1,catAni,catImg2;
var mouse,mouseImg1,mouseAni,mouseImg2;

function preload() 
{
    //loadind the images
    bgImage = loadImage("images/garden.png");

    catImg1 = loadImage("images/cat1.png");
    catAni = loadAnimation("images/cat2.png","images/cat3.png");
    catImg2 = loadImage("images/cat4.png");

    mouseImg1 = loadImage("images/mouse1.png");
    mouseAni = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg2 = loadImage("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    //creating cat and mouse
    cat = createSprite(800,650,10,10);
    cat.addImage("steady",catImg1);
    cat.scale = 0.175;

    mouse = createSprite(200,650,10,10);
    mouse.addImage("still",mouseImg1);
    mouse.scale = 0.125;
}

function draw()
{   
    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x/2 < mouse.x)
    {
        cat.velocityX = 0;
        cat.addAnimation("reached",catImg2);
        cat.changeAnimation("reached");
        cat.x = 350;

        mouse.addAnimation("arrived",mouseImg2);
        mouse.changeAnimation("arrived");
    }

    keyPressed();

    drawSprites();
}

function keyPressed()
{

  //For moving and changing animation of cat and mouse
  if(keyDown(LEFT_ARROW))
  {
    //For mouse
    mouse.addAnimation("teasing",mouseAni);
    mouse.changeAnimation("teasing");
    mouse.frameDelay = 10;

    //For the Cat
    cat.addAnimation("moving",catAni);
    cat.changeAnimation("moving");
    cat.frameDelay = 10;
    cat.velocityX = -5;
  }
}