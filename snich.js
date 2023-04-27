class Snich {
  constructor(positionY) {
    this.img = new Image();
    this.img.src = "imagenes/snich.png";
    this.x = canvas.width;
    this.y = positionY;
    this.w = 55;
    this.h = 55;
    this.speed = 5;
  }

  drawSnich = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveSnich = () => {
    this.x -= this.speed;
  };
}
