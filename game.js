class Game {
  constructor() {
    this.maxScore = 10;
    this.reset = new Reset();
  }

  scoreLogic() {
    let p1 = new Paddle();
    let p2 = new Paddle();
    let ball = new Ball();

    if(ball.x <=0) {
      p1.score++
      reset()
    } else if(ball.x >=board.width){
      p2.score++
      this.reset()
    }
  }

  endGame() {
    if(p1.score === this.maxScore || p2.score === this.maxScore) {
      alert('Game over'); //alert winner
      this.reset();
    }
  }

}




