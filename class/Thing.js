class Thing {
	constructor(x, y, size, speedX, speedY,rn, cr) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.speedX = speedX;
		this.speedY = speedY;
        this.rn = rn;
        this.cr = cr;
	}
		
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
}