class Snich {
    constructor(positionY)  {
        // propiedades de cada duende
    this.img = new Image()
    this.img.src = "imagenes/snich.png"
    this.x  = canvas.width
    this.y = positionY
    // deberia ser aleatorio
    this.w = 60
    this.h = 60
    this.speed = 5
    }

drawSnich = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
   }

   moveSnich = () => {
    this.x -= this.speed
 }

}