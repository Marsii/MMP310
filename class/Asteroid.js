class Asteroid extends Thing {
	constructor(x, y) {
		var x = x || random(width);
		var y = y || -100;
		var size = random(50, 100);
		var speedX = random(-1, 1);
		var speedY = random(0, 3);
        var rn = random(85);
        var cr = random(155)
		super(x, y, size, speedX, speedY, rn, cr);
       
        //var g = random(100);
        //var b = random(200,255);
	}
	
	display() {
		// draw your asteroid
		// this.x, this.y for position
        noStroke();
        //stroke(1/2);
        fill(50 + this.cr, 35, 95 + this.cr, this.rn + random(50, 60)); //random with small range results in slight shimmer/twinkle
        square(this.x , this.y, this.size, this.rn);

        //tried something, didn't work :( I was trying to get random quads that didn't shake as they moved
        //quad(this.x , this.y,  this.x + this.size , this.y , this.x + this.size, this.y + this.size, this.x, this.y + this.size );
        //quad(this.x , this.y,  this.x + this.size , this.y , this.x + this.size, this.y + this.size, this.x, this.y + this.size );
        //quad(this.x , this.y,  this.x + this.size + this.rn , this.y , this.x + this.size , this.y + this.size + this.rn, this.x, this.y + this.size );
		// this.size
	}
}