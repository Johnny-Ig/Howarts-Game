class Hechizos {
  constructor(voldemortX, voldemortY) {
    this.img = new Image();
    this.img.src = "imagenes/adabraaabieenTransformed.png";
    this.x = voldemortX - 10;
    this.y = voldemortY;
    this.w = 50;
    this.h = 50;
    this.move = 2;
  }

  hechizoVolDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveHechizo = () => {
    this.x -= this.move;
  };
}
