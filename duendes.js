class Duendes {
    constructor(positionY)  {
        // propiedades de cada duende
    this.img = new Image()
    this.img.src = "imagenes/duende.png"
    this.x  = canvas.width
    this.y = positionY
    // deberia ser aleatorio
    this.w = 70
    this.h = 70
    this.speed = 5

    }
// metodos (acciones) de los duendes

   drawDuende = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
   }
    // los duendes se mueven hacia harry

     move = () => {
        this.x -= this.speed
     }
  
}