class Board {
  constructor() {
    this.width = 600;
    this.height = 400;
  }

  draw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, this.width, this.height);
  }
}

//clearRect
//globalCompositeOperation = 'destination over' - prevents from trailing image
//draw image
