/*
    I have 2 1/2 patterns in here
*/


function setup() {
    createCanvas(1100, 600);
    background('black');
    drawPattern();
}
   function draw(){
    //drawPattern();
}

function drawPattern(){
    
    translate(550, 300);
    for (let x = -30; x < width; x += 75){
         rotate(15*PI/30);
        for (let y = -20; y < height; y += 30) {
           rotate(1*PI/random(15,25));
        
        
        //triangle(30+x, 75, 58+x, 20, 86+x, 75);
        //ellipse( x , 20+y, random(5,25));  
       
        triangle(30, 75+y, 58, 20+y, 86, 75+y);
        ellipse(20 , y, random(5,25)); 
        
     //strokeWeight(random(3));
    // line(5+x, 20+y, 85+x, 75+y); 
     //line(85+x, 20+y, 5+x, 75+y); 
		//translate(550+x, 300+y);
            
        var r = random(200);
		var g = random(60);
		var b = random(255);
        fill(r, g, b);
        noStroke();
    }
    }
}

