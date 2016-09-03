class Board {
  constructor() {
    this.width = 600;
    this.height = 400;
  }

  draw() {
    let canvas = document.getElementById('game');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.setLineDash([6 , 7]);
    ctx.beginPath();
    ctx.moveTo(this.width/2, 0);
    ctx.lineTo(this.width/2, this.height);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

