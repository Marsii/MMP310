/*
    story sketch
    9-5-19
    Marshall
    mmp 310
*/

//character variables
var x = 250;
var y = 200;
var faceSize = 150;
var eyeSize = 30;
var c = 'green' ;
var eyeOffset = 25;
var greeting = '"Hello Earthling!"';

function setup() {
    createCanvas(windowWidth,600);
    background('black'); 
    
    textSize(30);
    fill('white');
    text(greeting,x+100,y-50);
    
   
//Green Character
    fill(50, 186, 78);
    
    ellipse(x, y, faceSize);//face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - eyeOffset, y  , eyeSize, 70);//left eye
    
    ellipse(x + eyeOffset + 25, y, eyeSize, 70);//right eye
    noStroke();
    fill(50, 186, 78);
    triangle(210, 375, 258, 220, 296, 375);//body
    rect(240, 80, 15, 55);//antenna
    
    rect(230, 360, 15, 75);//leg
    
}