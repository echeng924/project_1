class Game {
  constructor() {
    this.maxScore = 10;
    this.board = new Board();
    this.p1 = new Paddle(10, this.board.height/2-10, 81, 90);
    this.p2 = new Paddle(580, this.board.height/2-10, 38, 40);
    this.ball = new Ball(this.board);
  }

  scoreDraw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.font = '30px Bungee';
    ctx.fillStyle = 'white';
    ctx.fillText(this.p1.score, 40, 40);
    ctx.fillText(this.p2.score, 540, 40);
  }

  draw() {
    this.board.draw();
    this.p1.draw();
    this.p2.draw();
    this.ball.draw();
    this.scoreDraw();
  }

  startGame() {
    this.draw();
    this.p1.keyMovement();
    this.p2.keyMovement();
  }

  scoreLogic() {
    if (this.ball.x <= 0) {
      this.p2.score++;
    } else if (this.ball.x >= this.board.width- this.ball.side) {
      this.p1.score++;
    }
  }

  endGame() {
    if(p1.score === this.maxScore || p2.score === this.maxScore) {
      alert('Game over'); //alert winner

    }
  }

}

let newGame = new Game();
newGame.startGame();
function draw() {
  newGame.scoreLogic();
  newGame.draw();
}

setInterval(draw, 100);





