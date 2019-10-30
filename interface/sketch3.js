/*
    Third pattern, triangles arranged 
*/
var numX = 10;
var numY = 10;

var redColor = 10;
var greenColor = 10;
var blueColor = 10;

function setup() {
    createCanvas(windowWidth, 600);
    background('gray');
    translate(550, 300);
    pattern();

    var button = createButton("Generate Pattern");
    button.mouseClicked(pattern);

    createP("Change Pattern");
    var numSlider = createSlider(1, 20, numX);
    numSlider.input(getNumX);

    createP("Change Pattern");
    var numSlider = createSlider(2, 100, numY);
    numSlider.input(getNumY);

    createP("Change Redness");
    var numSlider = createSlider(10, 215, redColor);
    numSlider.input(getRed);

    createP("Change Greenness");
    var numSlider = createSlider(10, 215, greenColor);
    numSlider.input(getGreen);

    createP("Change Blueness");
    var numSlider = createSlider(10, 215, blueColor);
    numSlider.input(getBlue);
    //nameInput = createInput("Name the file");

}

function mouseClicked() {
    background('gray');
    pattern();
}

function getNumX() {
    numX = this.value();
    pattern();
}

function getNumY() {
    numY = this.value();
    pattern();
}
//function getRed() {
//    redColor = this.value();
//    pattern();
//}
//function getGreen() {
//    greenColor = this.value();
//    pattern();
//}
//function getBlue() {
//    blueColor = this.value();
//    pattern();
//}

function pattern() {


    for (let x = 0; x < width; x += 75) {
        rotate(numX * PI / 30);
        for (let y = 0; y < numY; y += 75) {
            rotate(1 * PI / random(15, 25));
            //        var r = redColor + random(-10,10);
            //        var g = greenColor + random(-10,10);
            //        var b = blueColor + random(-10,10);
            var r = random(150);
            var g = random(225);
            var b = random(200);


            fill(r, g, b, 110); // color of triangle and ellipses
            stroke(1);

            //triangle(30+x, 75, 58+x, 20, 86+x, 75);
            ellipse(x, 20 + y, random(5, 25));

            triangle(30, 75 + y, 58, 20 + y, 86, 75 + y);
            ellipse(20, y, random(5, 25));

            //strokeWeight(random(3));
            // line(5+x, 20+y, 85+x, 75+y); 
            //line(85+x, 20+y, 5+x, 75+y); 
            //translate(550+x, 300+y);


        }
    }
}
