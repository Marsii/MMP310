var sizes = [30, 40, 50, 60, 70, 80, 30];
var yposition = [30, 40, -10, 20, -20, 0, 10];
var speed = [1, 3, 2, 5, 4, 2, 1.5];
var xposition = [1, 3, 2, 5, 4, 2, 1.5];

function setup() {
    createCanvas(800, 800);

}

function draw() {
    background('black');
    //gren(x,y);
	
	for (let i = 0; i < yposition.length; i++) {
		gren(20 + xposition[i] * 100, yposition[i], sizes[i]);
        
       
        
        xposition[i] += (speed[i])/500;
		yposition[i] += (speed[i])/2;
        //sizes[i] += speed[i];
	}
}

function gren(x, y, size) {


    //size = y * .75

    fill('plum')
    noStroke();
    ellipse(x, y, size); //face
    fill('black');
    //rotate();
    ellipse(x - size / 5, y, size / 5, size / 2.5); //left eye
    ellipse(x + size / 5, y, size / 5, size / 2.5); //right eye
    noStroke();
    fill('plum');
    strokeWeight(size / 15);
    stroke('plum');
    line(x, y / 2.5, x, y);
    noStroke();
    ellipse(x, y / 2.5, size / 3); //antenna top
}



