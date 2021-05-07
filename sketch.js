
var bgimg;
var tom,tomimage,tomimage2;
var jerry, jerryimage, jerryimage2;


function preload() {
    bgimg=loadImage("images/garden.png");
    tomimage=loadImage("images/cat1.png");
    tomimage2=loadAnimation("images/cat2.png","images/cat3.png");
    jerryimage=loadImage("images/mouse1.png");
    jerryimage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
    tomImg3=loadAnimation("images/cat4.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);

    tom=createSprite(850,600);
    tom.addImage(tomimage);
    tom.scale=0.2;
    //create tom and jerry sprites here
    jerry=createSprite(200,600);
    jerry.addImage(jerryimage);
    jerry.scale=0.15;

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) { tom.velocityX=0;
    tom.addAnimation("tomLastImage", tomImg3);
    tom.x =300; 
    tom.scale=0.2; 
    tom.changeAnimation("tomLastImage"); 

     jerry.addAnimation("jerryLastImage", jerryImg3);
     jerry.scale=0.15; 
     jerry.changeAnimation("jerryLastImage"); 
}

    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
    tom.velocityX=-5
    tom.addAnimation("ii",tomimage2)
    tom.changeAnimation("ii")
    jerry.addAnimation("i",jerryimage2)
    jerry.changeAnimation("i")
    
}


  //For moving and changing animation write code here


}
