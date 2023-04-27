class Harry {
  constructor() {
    this.img = new Image();
    this.img.src = "imagenes/harryReal.png";
    this.x = 40;
    this.y = canvas.height / 2;
    this.w = 95;
    this.h = 95;
    this.move = 30;
  }

  harryDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movesUp = () => {
    if (this.y > 2) {
      this.y -= this.move;
    }
  };
  movesDown = () => {
    if (this.y < 385) {
      this.y += this.move;
    }
  };
}
