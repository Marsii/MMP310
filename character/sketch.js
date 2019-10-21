/*
    interface
    10-16-19
*/
var eyeNum = 3;
var nameInput;

var r = 194;
var g = 147;
var b = 141;

var xbody = 75;
var eyeColor = 100;

function setup() {
    createCanvas(windowWidth, 600);
    character();
    
    createP("Body Width");
    var bodySlider = createSlider(1, 150, xbody);
    bodySlider.input(getbodyNum);

    createP("Character redness");
    var redSlider = createSlider(0, 255, r);
    redSlider.input(updateRed);

    createP("Character greenness");
    var greenSlider = createSlider(0, 255, g);
    greenSlider.input(updateGreen);

    createP("Character blueness");
    var blueSlider = createSlider(0, 255, b);
    blueSlider.input(updateBlue);

    createP("Eye Number");
    var eyeSlider = createSlider(1, 50, eyeNum);
    eyeSlider.input(geteyeNum);
    
    createP("Eye Color");
    var eyecSlider = createSlider(1, 255, eyeColor);
    eyecSlider.input(geteyeColor);

}
function getbodyNum() {
    xbody = this.value();
    character();
}

function updateRed() {
    r = this.value()
    character();
}

function updateGreen() {
    g = this.value()
    character();
}

function updateBlue() {
    b = this.value()
    character();
}

function geteyeNum() {
    eyeNum = this.value();
    character();
}

function geteyeColor() {
    eyeColor = this.value();
    character();
}
function character() {
    background(51);

    noStroke();
    fill(r, g, b);
    triangle(width/2 + xbody, 465, width/2, 220, width/2 - xbody, 465);
    ellipse(width / 2, height / 3, 200, ); // face
    stroke("purple");
    for (let i = 0; i < eyeNum; i++) {
        fill(eyeColor);
        ellipse(width/2+random(-80,80), height / 3, 30, 60);
    }
   
    //ellipse(width/2, height/3, eyeSize, 40);//eyes
}
