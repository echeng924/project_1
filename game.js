class Game {
  constructor() {
    this.maxScore = 3;
    this.board = new Board();
    this.p1 = new Paddle(20, this.board.height/2-10, 81, 90);
    this.p2 = new Paddle(770, this.board.height/2-10, 38, 40);
    this.ball = new Ball(this.board);
    this.audio = new Audio('pong.wav');
  }

  scoreDraw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.font = '50px Bungee';
    ctx.fillStyle = 'white';
    ctx.fillText(this.p1.score, 310, 60);
    ctx.fillText(this.p2.score, 450, 60);
  }

  startScreenDraw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.board.width, this.board.height);
    ctx.font = '25px Bungee';
    ctx.fillStyle = 'white';
    ctx.fillText('Start game by clicking the screen.', 20, 230);
    ctx.fillText('P1 keys: Q & Z.  P2 keys: Up & Down Arrows.', 50, 270);
    document.addEventListener('click', () => {
      refreshGame = setInterval(update, 100);
    });
    console.log('clicked');
  }

  draw() {
    this.board.draw();
    this.p1.draw();
    this.p2.draw();
    this.ball.draw();
    this.scoreDraw();
  }

  startGame() {
      this.p1.keyMovement();
      this.p2.keyMovement();
  }

  paddleCollision() {
    if (this.ball.x <= this.p1.x + this.p1.width &&
      this.ball.y >= this.p1.y && this.ball.y <= this.p1.y + this.p1.height && this.ball.velX < 0) {
      this.ball.velX = (this.ball.velX * -(Math.random()/3 + 1));
      this.audio.play();
      console.log('hit p1 paddle');
      console.log(this.ball.velX);
    } else if (this.ball.x + this.ball.side >= this.p2.x &&
      this.ball.y >= this.p2.y && this.ball.y <= this.p2.y + this.p2.height && this.ball.velX > 0) {
      this.ball.velX = (this.ball.velX * -(Math.random()/3 + 1));
      this.audio.play();
      console.log('hit p2 paddle');
      console.log(this.ball.velX);
    }
  }

  scoreLogic() {
    if (this.ball.x <= 0) {
      this.p2.score++;
    } else if (this.ball.x >= this.board.width - this.ball.side) {
      this.p1.score++;
    }
  }

  endGame() {
    if (this.p1.score === this.maxScore) {
      alert('Game over, Player 1 wins!');
      clearInterval(refreshGame);
      location.reload();
    } else if (this.p2.score === this.maxScore) {
      alert('Game over, Player 2 wins!');
      clearInterval(refreshGame);
      location.reload();
    }
  }

}

let newGame = new Game();
newGame.startGame();
setTimeout(() => {
newGame.startScreenDraw();
}, 250);

function update() {
  newGame.scoreLogic();
  newGame.draw();
  newGame.paddleCollision();
  newGame.endGame();
}

let refreshGame;

// let refreshGame = setInterval(update, 100);






