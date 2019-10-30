class Thing {
	constructor(x, y, size, speedX, speedY,rn) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.speedX = speedX;
		this.speedY = speedY;
        this.rn = rn;
	}
		
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
}