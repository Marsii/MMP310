/*
    First pattern, triangles
*/
function setup() {
    createCanvas(800, 800);
    background('black');
    drawPattern();
}
function mouseClicked(){
    background('black');
      drawPattern();
}

function drawPattern() {
    for (let x = -30; x < width; x += 75){
        for (let y = -20; y < height; y += random(15,50)) {

        var r = random(200);
		var g = random(60);
		var b = random(255);
        fill(r, g, b);
            
     triangle(30 + x, 75 + y, 58 + x, 20 + y, 86 + x, 75 + y)
     ellipse(x + 20 , y, random(5,25))  
     strokeWeight(random(3));
     //line(5+x, 20+y, 85+x, 75+y); 
     //line(85+x, 20+y, 5+x, 75+y); 
		
        
        noStroke();
    }
    }
}


