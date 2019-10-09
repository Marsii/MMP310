/*
    I have 2 1/2 patterns in here
*/

function setup() {
    createCanvas(800, 800);
    background(172 + random(55), 141 + random(55), 186 + random(55));
    createPattern();
}
/*
function draw(){
 createPattern();
}*/

function createPattern() {
    
    translate(random(375, 425), random(375, 425));
    stroke(0, 0, 0, 150);
    strokeWeight(1);
    var s = random(200, 400);
    var t = random(50);
    for (let x = 0; x <= 70; x += 1){
    var r = random(200);
    var g = random(200);
    var b = random(200);
    fill(r, g, b,random(15,35));
      stroke(0, 0, 0, 50);
      ellipse(length/2 + t, 150, 70 + t);//outercircles
      stroke(0, 0, 0, 110);
      ellipse(60, height/2, t*2 + t);//outercircles
      //ellipse(x+random(255), 30, 100);//face
    
  rotate(1*PI/random(15,50));
  for (let y = 0; y <= 100; y = y + 1){  
      stroke(r + random(55), g + random(55), b + random(55), 120);
  point(30 + random(350), 20 + random(350));
  }
  stroke(0, 0, 0, 140);
  square(s, 20, 55);
  square(30, s, 55+t, 20);
  ellipse(0, 200, 300, 150);// main circle
  triangle(30, 75, 58, 20, 86, 75);
  triangle(43, 32, 15, 32, 29, 10);
  }

}
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