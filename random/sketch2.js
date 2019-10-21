/*
    Nice Circular Pattern
*/

function setup() {
    createCanvas(800, 800);
    background(172 + random(55), 141 + random(55), 186 + random(55));
    translate(400, 400);
    createPattern();
}

function mouseClicked() {
    clear();

    background(172 + random(55), 141 + random(55), 186 + random(55));
    createPattern();

}

function createPattern() {
    //translate(0,0);
    var d = random(-100, 100)
    //translate(400, 400);
    stroke(0, 0, 0, 150);
    strokeWeight(1);
    var s = random(200, 400);
    var t = random(50);
    for (let x = 0; x <= 70; x += 1) {
        var r = random(200);
        var g = random(200);
        var b = random(200);
        fill(r, g, b, random(15, 35));
        stroke(0, 0, 0, 50);
        ellipse(length / 2 + t, 150, 70 + t); //outercircles
        stroke(0, 0, 0, 110);
        ellipse(60, height / 2, t * 2 + t); //outercircles
        //ellipse(x+random(255), 30, 100);//face

        rotate(1 * PI / random(15, 50));
        for (let y = 0; y <= 100; y = y + 1) {
            stroke(r + random(55), g + random(55), b + random(55), 120);
            point(30 + random(350), 20 + random(350));
        }
        stroke(0, 0, 0, 140);
        square(s, 20, 55);
        square(30, s, 55 + t, 20);
        ellipse(0, 200, 300, 150 + d); // main circle
        triangle(30, 75, 58, 20, 86, 75);
        triangle(43, 32, 15, 32, 29, 10);
    }

}
