var tom,tom1,tom2,tom3;
var mouse,mouse1,mouse2,mouse3;
var back
function preload() {
    //load the images here
    tom1 = loadAnimation('images/cat1.png')
    tom2 = loadAnimation('images/cat2.png','images/cat3.png')
    tom3 = loadAnimation('images/cat4.png')

    mouse1 = loadAnimation('images/mouse1.png')
    mouse2 = loadAnimation('images/mouse2.png','images/mouse3.png')
    mouse3 = loadAnimation('images/mouse4.png')
    
    back = loadImage('images/garden.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     tom = createSprite(800,600,50,50)
     tom.addAnimation('tom',tom1)
     tom.scale=0.25
     mouse = createSprite(150,600,50,50)
     mouse.addAnimation('jerry',mouse1)
     mouse.scale=0.2

}

function draw() {

    background(back);
     //Write condition here to evalute if tom and jerry collide
      if(tom.x - mouse.x < (tom.width - mouse.width)/2){
          tom.addAnimation("tomy",tom3)
          tom.changeAnimation("tomy")
          tom.velocityX=0;
          mouse.addAnimation('jerryka',mouse3)
        mouse.changeAnimation('jerryka')
      }   
 



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode==37){
        tom.velocityX=-5
        tom.addAnimation('tommy',tom2)
        tom.changeAnimation('tommy')
        mouse.addAnimation('jerryk',mouse2)
        mouse.changeAnimation('jerryk')
    }

}
