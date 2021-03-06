class Ball {
  constructor(board) {
    this.board = board;
    this.side = 12;
    this.x = board.width / 2;
    this.y = board.height / 2;
    this.velX = 9;
    this.velY = 9;
  }

  ballMovement() {
    this.x += this.velX;
    this.y += this.velY;
  }

  edgeCollision() {
    if (this.x >= this.board.width - this.side) {
      this.velX = (this.velX * -1);
    } else if (this.x <= 0) {
      this.velX = (this.velX * -1);
    } else if (this.y >= this.board.height - this.side) {
      this.velY = (this.velY * -1);
    } else if (this.y <= 0) {
      this.velY = (this.velY * -1);
    }
  }

  draw() {
    this.ballMovement();
    this.edgeCollision();

    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }
}



