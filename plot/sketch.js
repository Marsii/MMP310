/*
    plot sketch
    9-23-19
    Marshall
    mmp 310
*/

//first character variables (Gren)
var x = 250;
var y = 200;



//second character variables (Blue)

var h = 600;
var j = 200;



//var scene = "cold"
//story
/*
settings:cold,hot,earth

*/
var p = 0;
var story0 = "";
//var story2 = "They were too hot, so they settled on Earth.";


function setup() {
     createCanvas(1100, 600);
    firstp();
   /*
    function mousePressed() {
	if (scene == "cold") {
		scene = "hot";
	} else if (scene == "hot") {
		scene = "earth";
	} else if (scene == "earth") {
		scene = "cold";
	}

}
*/
}
    function draw() {
        
        
    //set the setting 
    if(key == "a") {
        firstp();
    
    
    }else if (key == "w"){
        secondp();
            
            /*
    for (x =0; x , width; x += 50) {
    rect(x, 100+random(50), 90, height - 100);
    }*/
    }else if (key == "d"){
        thirdp();
    }
    
    gren(250,200,150,30,25);
    blu(600,200,150,30,25);
}

function blu(h,j,faceSize,eyeSize,eyeOffset){
fill(50, 186, 178);
    
    ellipse(h, j, faceSize);//face
    fill('DimGray');
    stroke('WhiteSmoke');
    //rotate();
    ellipse(h - eyeOffset - 25, j  , eyeSize, 60);//left eye
    ellipse(h - 15, j - 22 , eyeSize, 40);//middle eye
    ellipse(h + eyeOffset, j, eyeSize, 60);//right eye
    noStroke();
    fill(50, 186, 178);
    triangle(560, 365, 608, 220, 650, 365);//body
    rect(580, 80, 15, 65);//left antenna
    rect(600, 80, 15, 65);//right antenna
    ellipse(597 ,80, 40);//antenna top
    
    rect(580, 360, 10, 65);//left leg 
    rect(600, 360, 10, 65);//middle leg
    rect(620, 360, 10, 65);//right leg
    
    //textSize(35);
    //textAlign(CENTER);
    //text(story0, width/2, 550);
}
function gren(x,y,faceSize,eyeSize,eyeOffset){
fill(50, 186, 78);

    ellipse(x, y, faceSize);//face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - eyeOffset, y  , eyeSize, 60);//left eye
    ellipse(x + eyeOffset + 25, y, eyeSize, 60);//right eye
    noStroke();
    fill(50, 186, 78);
    triangle(210, 375, 258, 220, 296, 375);//body
    rect(240, 80, 15, 55);//antenna
    ellipse(247,80, 40);//antenna top
    
    rect(230, 360, 15, 65);//left leg
    rect(270, 360, 15, 65);//right leg
}
function firstp(){
background('MidnightBlue');
         //First Planet
    fill('LightCyan');
    rect(0, 400, width, 200);
    noStroke();
    fill('MediumBlue');
    triangle(660, 500, 908, 120, 1150, 500);//mountain
    fill('LightCyan');
    noStroke();
    triangle(760, 500, 908, 120, 1150, 500);//mountain
    rect(0, 400, width, 200);
    plot1();
    //text("Two Alien friends meet on a cold planet");
}
function plot1(){
    //Text Conversation
    textSize(15);
    fill('PaleGreen');
    text("Hey Blu, are you cold?",280,y-50);
    text("Let's go some place warmer",280, y+20);
    fill('Azure')
    text("Yes",h-120,j-10);
    text('Ok',h-110,j+50)
    textSize(30);
    fill('black')
    text("Two Alien friends meet on a cold planet",width/2,500);
}
function secondp(){
    //Second Planet
    
    fill(240, 206, 58, 200);
    background('Red')
    rect(0, 0, width, height);
    noStroke();
    fill(186, 93, 6);
    //rect(0, 400, width, 200);
    //fill('Orange');
    noStroke();
    //fill(255, 188, 54, 60);
    //triangle(760, 500, 908, 120, 1150, 500);//mountain
    rect(0, 400, width, 200);
    plot2();
    //ellipse(1000,1000,1020,300)
}
function plot2(){
    //Text Conversation
    textSize(15);
    fill('PaleGreen');
    text("You're right.",x + 125, y+20);
    fill('Azure');
    text("It's too hot here.",h-140,j-10);
    text("Let's go somewhere else.",h-155,j+50);
    textSize(30);
    fill('black');
    text("It was too cold, so they went somewhere warm but found it too hot",width/2,500);
}
function thirdp(){
    background(122, 222, 214);
    noStroke();
    fill(47, 173, 9);
    noStroke();
    rect(0, 400, width, 200);
    //ellipse(1000,1000,1020,300)
    plot3();
}
function plot3(){
    textSize(15);
    fill('PaleGreen');
    text("Don't worry, it will be just right soon.",x + 185, y+70);
    fill('Azure');
    text("Isn't it still kinda cold?",h-150,j+20);
    textSize(30);
    fill('black');
    text("They were too hot, so they settled on Earth to wait for it to be just right.",width/2,500);
}