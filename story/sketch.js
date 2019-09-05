/*
    story sketch
    9-5-19
    Marshall
    mmp 310
*/

//character variables
var x =250;
var y =200;
var faceSize =200;
var eyeSize =50;
var skincolor= 'pink';
var eyeOffset= 25;


var greeting= '"Hello!"';
function setup() {
    createCanvas(windowWidth,600);
}
function draw() {    
    background('black');
    textSize(40);
    //text(greeting,x,y);
    
    
    fill(skincolor);
    stroke('white')
    strokeWeight(3);
    ellipse(x,y,s);
    rect(x-50,y-50,eyesize,eyesize);//left eye
    rect(x+50,y+50,eyesize,eyesize);//left eye

}