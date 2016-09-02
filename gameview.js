//Game view start game
//render here


let board = new Board();
let p1 = new Paddle(10, board.height/2-10);
let p2 = new Paddle(580, board.height/2-10);
let ball = new Ball();

function draw () {
  board.draw();
  p1.draw();
  p2.draw();
  ball.draw();
}

draw();

setInterval(draw, 1000);

