/*
things to consider/variables:
-game (canvas)
-players
-paddles
-ball, properties: position and speed, x & y, speed of x and y
-score
-start/restart
-over
-starting score: 0;
-speed of ball...does it increase over time?
-has the game started?
-audio for ping pong collision noise
-animation at the end for game over

Classes
-event listeners for mousemove/mousedown on canvas(board) to run functions of some sort
  https://developer.mozilla.org/en-US/docs/Web/Events

  project structure:
  -index.html
  -board.js -- initializes the DOM and objects
  -keybaord.js -- keyboard functions and event listeners here
  -game.js -- main loop game logic
    The Date.now() method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
    SyntaxEDIT
    var timeInMs = Date.now();

    use set Interval here to loop again

  -render.js -- does the rendering
  -reset.js -- resets to new gamestate when score reaches 10 (or set #); has function to redraw board

AABB - Axis-Aligned Bounding Boxes - for paddle collision, physics of game??

key codes for js...
Q is 81
Z is 90
up arrow is 38
down arrow is 40




render while (true)

git push origin gh pages

*/
