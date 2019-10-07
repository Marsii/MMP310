/*
    I have 2 1/2 patterns in here
*/
/*
function setup() {
    createCanvas(1100, 600);
    background('black');
    drawPattern();
}
   function draw(){
    //drawPattern();
}

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
*/
    	/*
        
        function setup() {
  createCanvas(600, 600);
  background(172, 141, 186);
  pattern()
  
}

function pattern() {
  //background(172, 141, 186); 
  //background(mouseY, 141, 186);
  push();

 
 
  translate(300, 300);

  
  stroke(0, 0, 0);
  strokeWeight(1);
  
  for (let x = 0; x < 40; x += 1){
    var r = random(200);
    var g = random(200);
    var b = random(200);
 
		fill(r, g, b,15);
     ellipse(x, height/2, 100)//face
      

    
  rotate(1*PI/19);
  ellipse(0, 200, 300, 150);
  }
  
  
  pop();

}*/

  

function setup() {
  createCanvas(700, 700);
  background(172, 141, 186);
  pattern()
  
}

function pattern() {
  //background(172, 141, 186); 
  //background(mouseY, 141, 186);
  push();

 
 
  translate(350, 350);

  
  stroke(0, 0, 0);
  strokeWeight(1);
  
  for (let x = 0; x < 70; x += 1){
    var r = random(200);
    var g = random(200);
    var b = random(200);
 
		fill(r, g, b,random(15,35));
     ellipse(x, 150, 100)//outercircles
     ellipse(x, height/2, 100)//outercircles
    
      ellipse(x+random(255), 30, 100)//face

    
  rotate(1*PI/random(15,19));
  ellipse(0, 200, 300, 150);
  }
  
  
  pop();

}

