class Duendes {
  constructor(positionY) {
    this.img = new Image();
    this.img.src = "imagenes/duende.png";
    this.x = canvas.width;
    this.y = positionY;
    this.w = 70;
    this.h = 70;
    this.speed = 5;
  }

  drawDuende = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  move = () => {
    this.x -= this.speed;
  };
}
