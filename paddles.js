class Paddle {
  constructor(x, y, keyUp, keyDown) {
    //where w and h determine size of paddle and x & y are position on board
    //change to take width and height, x and y for 2 players
    this.width = 10;
    this.height = 80;
    this.x = x;
    this.y = y;
    this.score = 0;
    this.keyUp = keyUp;
    this.keyDown = keyDown;
  }

  keyMovement() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.keyDown) {
        if (this.y + this.height < 500) {
          this.y += 25;
        } else {
          this.y += 0;
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.keyCode === this.keyUp) {
        if (this.y > 0) {
          this.y -= 25;
        } else {
          this.y += 0;
        }
      }
    });
  }

  draw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}


