class Ball {
  constructor(board) {
    this.board = board;
    this.side= 12;
    this.x = board.width/2;
    this.y = board.height/2;
    this.speed = 0; //starting speed...set at random?
    this.velX = 6;
    this.velY = 6;
  }

  ballMovement() {
    this.x += this.velX;
    this.y += this.velY;
  }

  edgeCollision() {
    if(this.x >= this.board.width - this.side) {
      this.velX = (this.velX * -1);
    } else if(this.x <= 0) {
      this.velX = (this.velX * -1);
    } else if(this.y >= this.board.height - this.side) {
      this.velY = (this.velY * -1);
    } else if (this.y <=0) {
      this.velY = (this.velY * -1);
    }
  }

  draw() {
    this.ballMovement();
    this.edgeCollision();

    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.side, this.side);
  }
}



