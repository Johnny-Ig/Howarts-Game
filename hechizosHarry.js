class HechizosHarry {
  constructor(harryX, harryY) {
    this.img = new Image();
    this.img.src = "imagenes/rayoHarryeditransformed.png";
    this.x = harryX + 10;
    this.y = harryY;
    this.w = 50;
    this.h = 50;
    this.move = 2;
  }

  hechizoHarryDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveHechizoHarry = () => {
    this.x += this.move;
  };
}
