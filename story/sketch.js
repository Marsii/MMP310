/*
    story sketch
    9-5-19
    Marshall
    mmp 310
*/

//character variables
var x = 250;
var y = 200;
var faceSize = 200;
var eyeSize = 50;
var c = 'green';
var eyeOffset = 25;
var greeting = '"Hello Earthling!"';

function setup() {
    createCanvas(windowWidth,600);
    background('black'); 
    
    textSize(30);
    fill('white');
    text(greeting,x+100,y-50);
    
   
    fill(c);
    stroke('white');
    ellipse(x, y, faceSize);//face
    fill('black');
    rotate(1*PI/37);
    ellipse(x - eyeOffset, y - eyeOffset, eyeSize, 70);//left eye
    
    ellipse(x + eyeOffset + 25, y - eyeOffset, eyeSize, 70);//right eye
    
}