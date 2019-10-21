/*
    Third pattern, triangles arranged 
*/


function setup() {
    createCanvas(1100, 600);
    background('gray');
    translate(550, 300);
    drawPattern();

}

function mouseClicked() {
    background('gray');
    drawPattern();
}

function drawPattern() {


    for (let x = -30; x < width; x += 75) {
        rotate(15 * PI / 30);
        for (let y = -20; y < height; y += 30) {
            rotate(1 * PI / random(15, 25));
            var r = random(150);
            var g = random(225);
            var b = random(200);

            fill(r, g, b, 110);
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
