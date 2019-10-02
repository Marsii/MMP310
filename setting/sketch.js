/*
    setting sketch
    9-11-19
    Marshall
    mmp 310
*/

//first character variables (Gren)
var a = 250;
var b = 200;
var GrenfaceSize = 150;
var GreneyeSize = 30;
var GreneyeOffset = 25;
var greeting = "Hey Blu, are you cold?";
//var idea = "Let's go some place warmer."; 
var posresp = "You're right.";
var finalline = "Don't worry, it will be just right in a few decades.";

//second character variables (Blue)

var h = 600;
var j = 200;
var BlufaceSize = 150;
var BlueyeSize = 30;
var BlueyeOffset = 25;
var posreply = "Yes";
var toohot = "It's hot here.";
var goelsewhere = "Let's go somewhere else.";
var stillhot = "Isn't it still kinda cold?";

var p = 0;
var story = p;
var story0 = "Two Alien friends meet on a cold planet";
var story1 = "It was too cold, so they went somewhere warm but found it too hot";
var story2 = "They were too hot, so they settled on Earth.";
function setup() {
    createCanvas(1100, 600);
    background('black'); 
}

function draw(){    
        
    //set the setting 
    if(key === "a" ) {
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
    /*
    for (x =0; x , width; x += 50) {
    rect(x, 100+random(50), 90, height - 100);
    }
    
    
    */
    }else if (key === "w"){
        background('Red');
    //Second Planet
    fill(235, 161, 91);
    rect(0, 0, width, height);
    fill(255, 188, 54, 60);
    //rect(0, 0, width, height);
    noStroke();
    fill(186, 93, 6);
    //rect(0, 400, width, 200);
    //fill('Orange');
    noStroke();
    //fill(255, 188, 54, 60);
    //triangle(760, 500, 908, 120, 1150, 500);//mountain
    rect(0, 400, width, 200);
    //ellipse(1000,1000,1020,300)
    }else if (key === "d"){
        background('Green');
        /*
        for
        
        
        */
    }
}
    
    //Text Conversation
    textSize(15);
    fill('PaleGreen');
    text(greeting,x+100,y-50);
    text(idea,x + 80, y+20);
    fill('Azure')
    text(posreply,h-120,j-10);
    text('Ok',h-110,j+50)
    
//Green Character
    fill(50, 186, 78);
    
    ellipse(x, y, GrenfaceSize);//face
    fill('black');
    stroke('white');
    //rotate();
    ellipse(x - GreneyeOffset, y  , GreneyeSize, 60);//left eye
    ellipse(x + GreneyeOffset + 25, y, GreneyeSize, 60);//right eye
    noStroke();
    fill(50, 186, 78);
    triangle(210, 375, 258, 220, 296, 375);//body
    rect(240, 80, 15, 55);//antenna
    ellipse(247,80, 40);//antenna top
    
    rect(230, 360, 15, 65);//left leg
    rect(270, 360, 15, 65);//right leg
    
    
    //Blue Character
    fill(50, 186, 178);
    
    ellipse(h, j, BlufaceSize);//face
    fill('DimGray');
    stroke('WhiteSmoke');
    //rotate();
    ellipse(h - BlueyeOffset - 25, j  , BlueyeSize, 60);//left eye
    ellipse(h - 15, j - 22 , BlueyeSize, 40);//middle eye
    ellipse(h + BlueyeOffset, j, BlueyeSize, 60);//right eye
    noStroke();
    fill(50, 186, 178);
    triangle(560, 365, 608, 220, 650, 365);//body
    rect(580, 80, 15, 65);//left antenna
    rect(600, 80, 15, 65);//right antenna
    ellipse(597 ,80, 40);//antenna top
    
    rect(580, 360, 10, 65);//left leg 
    rect(600, 360, 10, 65);//middle leg
    rect(620, 360, 10, 65);//right leg
    
    textSize(35);
    textAlign(CENTER);
    text(story0, width/2, 550);

}

