/*
    plot sketch
    9-23-19
    9-25-19
    Marshall
    mmp 310
*/
function setup() {
    createCanvas(1100, 600);
    background('black');
    drawPattern();
}
   function draw(){
    //drawPattern();
}
    /*
    for (let x = 0; x < width; x += 100){
     ellipse(x, height/2, 100)//face
        var r = random(0);
		var g = random(255);
		var b = random(60);
        
		fill(r, g, b);
    }
    */
function drawPattern(){
        for (let x = -30; x < width; x += 75){
        for (let y = -20; y < height; y += random(15,50)) {

            
     triangle(30 + x, 75 + y, 58 + x, 20 + y, 86 + x, 75 + y)
     ellipse(x + 20 , y, random(5,25))  
     strokeWeight(random(3));
     line(5+x, 20+y, 85+x, 75+y); 
     line(85+x, 20+y, 5+x, 75+y); 
		
        var r = random(200);
		var g = random(60);
		var b = random(255);
        fill(r, g, b);
        noStroke();
    }
    }
}
    	/*for (let x = -10; x < 1100; x += 10) {
		fill(255);
        noStroke();
		triangle(x, 600, x+10, 520, x+20, 600);
		fill(0);
		text(x, x, height/2);
	}*//*
    
    for (let x = 100; x < 600; x += 100) {
		fill(255);
		ellipse(x, height/2, 100);
		
	}*/
