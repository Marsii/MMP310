function setup() {
    createCanvas(800, 800);
    background('black');
    //alien(600, 200, 150, 0, 0);
    gren(200);
    //semi-working but flawed
    //gren(250, 200, 150);

}

function gren(y) {
//function gren(x, y, size)
//need to make body change properly based on size
    fill(50, 186, 78);
    
    x = y*1.25
    size = y*.75

    ellipse(x, y, size); //face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - size/5, y, size/5, size/2.5); //left eye
    ellipse(x + size/5, y, size/5, size/2.5); //right eye
    noStroke();
    fill(50, 186, 78);
    triangle(x-50, y*1.875, x, y, x+50, y*1.875); //body
    rect(x - 8, y/2.5, size/10, size/3); //antenna
    ellipse(x, y/2.5, size/3); //antenna top

    rect(x/1.15, y*1.8, size/10, size/3); //left leg
    rect(x/.95, y*1.8, size/10, size/3); //right leg
}

/*
function gren(x, y, size, xbody, ybody) {
    fill(50, 186, 78);

    ellipse(x, y, size); //face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - size/5, y, size/5, size/2.5); //left eye
    ellipse(x + size/5, y, size/5, size/2.5); //right eye
    noStroke();
    fill(50, 186, 78);
    triangle(x-50 + xbody, y*1.875 + ybody, x + xbody, y + ybody, x+50 + xbody, y*1.875 + ybody); //body
    rect(x - 8 + xbody, y/2.5 + ybody, size/10, size/3); //antenna
    ellipse(x + xbody, y/2.5 + ybody, size/3); //antenna top

    rect(x/1.15 + xbody, y*1.8 + ybody, size/10, size/3); //left leg
    rect(x/.95 + xbody, y*1.8 + ybody, size/10, size/3); //right leg
}
*/