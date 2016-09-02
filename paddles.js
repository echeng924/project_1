class Paddle {
  constructor(x, y) {
    //where w and h determine size of paddle and x & y are position on board
    //change to take widht and height, x and y for 2 players
    this.width = 10;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.score = 0;
  }

  draw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle ='white';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  keyMovement() {
    let p1 = new Paddle();
    let p2 = new Paddle();

  //p2 key event listeners
  document.addEventListener('keydown', (e) => {
    if(e.keyCode === 40) {
      p2.y -=5;
    }
  });

  document.addEventListener('keyup', (e) => {
    if(e.keyCode === 38) {
      //delete down movement?
      p2.y += 5;
    }
  });

  //p1 key event listeners
  document.addEventListener('keypress', (e) => {
    if(e.keyCode === 81) {
      //delete down?
      p1.y +=5;
    }
  });

  document.addEventListener('keypress', (e) => {
    if(e.keyCode === 90) {
      p1.y -=5;
    }
  });

  }
}
