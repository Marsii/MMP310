/*
    interface
    10-16-19
*/
var num = 10;
var nameInput;

var r = 194;
var g = 147;
var b = 141;

function setup() {
    createCanvas(windowWidth, 600);
    character();
    
    createP("Face red color");
    var redSlider = createSlider(0, 255, r);
    redSlider.input(updateRed);
}

function updateRed() {
 r = this.value()
 character();
}

function character() {
    background(51);
   
    noStroke();
    fill(194, 147, 141);
   
  ellipse(width/2, height/2, 200,250);// face
    
    stroke("purple")
   
}