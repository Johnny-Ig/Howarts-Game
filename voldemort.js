class Voldemort {
  constructor() {
    this.img = new Image();
    this.img.src = "imagenes/voldemort.png";
    this.x = 860;
    this.y = canvas.height /2 ;
    this.w = 110; 
    this.h = 110; 
    this.move = 2;
    this.movingDown= true;
    
  }

  voldemortDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveVoldemort = () => {
    // dependiendo del booleano lo muevo hacia ariiba o hacia abajo 
    // verificacion de cuando vol salga del cambas cambio del booleano
  if(this.movingDown === true){
    this.y += this.move;
  } else {
    this.y -= this.move;
  }
  
  };

   colisionVoldemort = () => {
    if(this.y > canvas.height -100 ){
      this.movingDown= false;
     } else if(this.y < 0){
      this.movingDown= true
     }
    }
}
