//Game view start game
//render here


let board = new Board();
let p1 = new Paddle();
let p2 = new Paddle();
let ball = new Ball();

function draw () {
  board.draw();
  p1.draw();
  p2.draw();
  ball.draw();
}

draw();


