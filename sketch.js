var canvas;
var music;
var red 
var blue
var pink 
var green
var ball
var edges

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600,600);

    //create 4 different surfaces
    red=createSprite(110,510,80,15)
    green=createSprite(220,510,80,15)
    pink=createSprite(330,510,80,15)
    blue=createSprite(440,510,80,15)
    //create box sprite and give velocity
    ball=createSprite(440,450,20,20)
    ball.velocityY=5
    ball.velocityX=2

}

function draw() {
    background("black");
    red.shapeColor="red"
    pink.shapeColor="pink"
    blue.shapeColor="blue"
    green.shapeColor="green"
    ball.shapeColor="white"
    edges=createEdgeSprites()
    ball.bounceOff(edges)
    
    if (red.isTouching(ball)&& ball.bounceOff(red)){
    ball.shapeColor="red"
    //music.play()
    }

    if (green.isTouching(ball)&&ball.bounceOff(green)){
       ball.shapeColor="green"
       //music.play()
    }

    if (pink.isTouching(ball)&&ball.bounceOff(pink)){
        ball.shapeColor="pink"
        //music.play()
     }

     if (blue.isTouching(ball)&&ball.bounceOff(blue)){
        ball.shapeColor="blue"
        //music.play()
     }
    //add condition to check if box touching surface and make it box
    drawSprites()
}
