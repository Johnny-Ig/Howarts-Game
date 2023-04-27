class Harry {
  constructor() {
    // propiedades de harry
    this.img = new Image();
    this.img.src = "imagenes/harryReal.png";
    this.x = 40;
    this.y = canvas.height / 2;
    this.w = 95; //ancho de harry
    this.h = 95; // alto del harry
    this.move = 30;
  }

  // metodos (acciones) del harry

  //DIBUJAR A HARRY

  harryDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movesUp = () => {
    if (this.y > 2) {
      // que no salte mas del techo
      this.y -= this.move;
    }
  };
  movesDown = () => {
    if (this.y < 385) {
      this.y += this.move;
    }
  };

}
