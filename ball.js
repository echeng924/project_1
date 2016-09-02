class Ball {
  constructor(side, x, y) {
    this.side= 10;
    this.x = 0;
    this.y = 0;
    this.speed = 0; //starting speed...set at random?
    this.velX = 0;
    this.velY = 0;
  }

  ballMovement() {
    this.x += this.velX;
    this.y += this.velY;
  }

  draw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }
}



