class Asteroid extends Thing {
	constructor(x, y) {
		var x = x || random(width);
		var y = y || -100;
		var size = random(50, 100);
		var speedX = random(-1, 1);
		var speedY = random(0, 3);
        var rn = random(75);
		super(x, y, size, speedX, speedY, rn);
       
        //var g = random(100);
        //var b = random(200,255);
	}
	
	display() {
		// draw your asteroid
		// this.x, this.y for position
        fill(210, 100, 246, this.rn + random(50, 60));
        square(this.x , this.y, this.size, this.rn);

        //tried something, didn't work :(
        //quad(this.x , this.y,  this.x + this.size , this.y , this.x + this.size, this.y + this.size, this.x, this.y + this.size );
        //quad(this.x , this.y,  this.x + this.size , this.y , this.x + this.size, this.y + this.size, this.x, this.y + this.size );
        //quad(this.x , this.y,  this.x + this.size + this.rn , this.y , this.x + this.size , this.y + this.size + this.rn, this.x, this.y + this.size );
		// this.size
	}
}