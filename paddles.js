class Paddle {
  constructor(width, height, x, y) {
    //where w and h determine size of paddle and x & y are position on board
    //change to take widht and height, x and y for 2 players
    this.width = 10;
    this.height = 60;
    this.x = 10;
    this.y = 10;
    this.score = 0;
  }

  draw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle ='white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
