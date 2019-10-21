/*
    Third pattern, triangles arranged 
*/
var numX = 10;
var nameInput;

var redColor = 50;
var greenColor = 50;
var blueColor = 50;
var rotation = 2;

function setup() {
    createCanvas(windowWidth, 600);
    translate(windowWidth/2,300);
    pattern();
 
    var button = createButton("Generate Pattern");
    button.mouseClicked(pattern);
    
    createP("Change Number of Rows");
    var numSlider = createSlider(2, 100, numX);
    numSlider.input(getNumX);
    
    createP("Change Redness");
    var numSlider = createSlider(10, 235, redColor);
    numSlider.input(getRed);
    
    createP("Change Greenness");
    var numSlider = createSlider(10, 235, greenColor);
    numSlider.input(getGreen);
    
    createP("Change Blueness");
    var numSlider = createSlider(10, 235, blueColor);
    numSlider.input(getBlue);
    
    createP("Change Rotation");
    var numSlider = createSlider(1, 15, rotation);
    numSlider.input(turn);
}

function getNumX() {
    numX = this.value();
    pattern();

}
function getRed() {
    redColor = this.value();
    pattern();
}
function getGreen() {
    greenColor = this.value();
    pattern();
}
function getBlue() {
    blueColor = this.value();
    pattern();
}
function turn() {
    rotation = this.value();
    pattern();
}


function pattern() {
    background(190,205);
    noStroke();
    
    for (let x = 0; x < numX; x ++){
         rotate(15*PI/30);
        for (let y = 0; y < height; y +=75) {
           rotate(rotation*PI/random(15,25));
        var r = redColor + random(-30,30);
        var g = greenColor + random(-30,30);
        var b = blueColor + random(-30,30);
            
        fill(r, g, b, 150); // color of triangle and ellipses
        stroke(1);
        
       //triangle(30+x, 75, 58+x, 20, 86+x, 75);
        ellipse(x , 20+y, random(5,25));  
        square(15 + x, 20 + y, 25, 2);
        triangle(30, 75+y, 58, 20+y, 86, 75+y);
        ellipse(20 , y, random(5,25)); 
            for (let s = 0; s < 150; s ++) {
            stroke(r, g, b, 110);
            point(x+random(-50,50),y+random(-50,50));    
            }
           
}
}
}