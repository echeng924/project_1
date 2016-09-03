//Game view start game
//render here

let board = new Board();
let p1 = new Paddle(10, board.height/2-10, 81, 90);
let p2 = new Paddle(580, board.height/2-10, 38, 40);
let ball = new Ball(board);

function draw () {
  board.draw();
  p1.draw();
  p2.draw();
  ball.draw();
}

draw();
p1.keyMovement();
p2.keyMovement();

setInterval(draw, 50);

