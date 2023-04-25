class Voldemort {
  constructor() {
    this.img = new Image();
    this.img.src = "imagenes/voldemort.png";
    this.x = 860;
    this.y = canvas.height /2 ;
    this.w = 110; 
    this.h = 110; 
    this.move = 30;
    
    
  }

  voldemortDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveVoldemort = () => {
    if (this.y + this.h < canvas.height) {
      this.y += this.move;
   } else if (this.y + this.h > canvas.height) {
      this.y -= this.move;
    }
    //console.log("test")
  };

 
}
