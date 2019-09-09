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
var greeting = '"Greetings!"';
var h = 400;

function setup() {
    createCanvas(windowWidth,600);
    background('black'); 
    
    textSize(15);
    fill('white');
    text(greeting,x+100,y-50);
    
   
//Green Character
    fill(50, 186, 78);
    
    ellipse(x, y, faceSize);//face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - eyeOffset, y  , eyeSize, 60);//left eye
    
    ellipse(x + eyeOffset + 25, y, eyeSize, 60);//right eye
    noStroke();
    fill(50, 186, 78);
    triangle(210, 375, 258, 220, 296, 375);//body
    rect(240, 80, 15, 55);//antenna
    
    rect(230, 360, 15, 65);//left leg
    rect(270, 360, 15, 65);//right leg
    
    
    //Blue Character
    fill(50, 186, 178);
    
    ellipse(h + 200, y, faceSize);//face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(h - eyeOffset + 175, y  , eyeSize, 60);//left eye
    ellipse(h + 187.5, y - 22 , eyeSize, 40);//middle eye
    ellipse(h + eyeOffset + 200, y, eyeSize, 60);//right eye
    noStroke();
    fill(50, 186, 178);
    triangle(560, 375, 608, 220, 646, 375);//body
    rect(580, 80, 15, 65);//antenna
    rect(600, 80, 15, 65);//antenna
    ellipse(597,80, 40);//antenna top
    
    rect(580, 360, 15, 65);//left leg
    rect(620, 360, 15, 65);//right leg
}