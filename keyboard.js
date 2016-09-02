// let upArrow = 38;
// let downArrow = 40;
// let qKey = 81;
// let zKey = 90;

//key press for the letters
//move into paddle class
//do i need to call new paddle players 1 an 2 because of different key values - move into game view??


keyMovement() {
  //p2 key event listeners
  document.addEventListener('keydown', (e) => {
    if(e.keyCode == 40) {
      this.y -=5;
    }
  });

  document.addEventListener('keyup', (e) => {
    if(e.keyCode == 38) {
      //delete down movement?
      this.y += 5;
    }
  });

  //p1 key event listeners
  document.addEventListener('keypress', (e) => {
    if(e.keyCode == 81) {
      //delete down?
      this.y +=5;
    }
  });

  document.addEventListener('keypress', (e) => {
    if(e.keyCode == 90) {
      this.y -=5;
    }
  });

}





// keyMovement () {
//   document.body.addEventListener('keydown', (e) => {
//     if(e.keyCode == 38) {
//       this.x -=5;
//     } else if (e.keyCode == 40) {
//       this.x -=5;
//     }
// }
