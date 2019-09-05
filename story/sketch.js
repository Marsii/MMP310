var x =250;
var y =200;
var s =300;

var greeting= '"Hello!"';
function setup() {
    createCanvas(windowWidth,600);
}
function draw() {    
    background('black');
    textSize(40);
    text(greeting,x,y);
    ellipse(x,y,s);

}