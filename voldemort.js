class Voldemort {
  constructor() {
    this.img = new Image();
    this.img.src = "imagenes/voldemort.png";
    this.x = 860;
    this.y = canvas.height / 2;
    this.w = 110; //ancho de harry
    this.h = 110; // alto del harry
    this.move = 30;
    this.isVolMoveUp = true;
  }

  voldemortDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveVoldemort = () => {
     //* El valor Y va a aumentar.
        //! Recordatorio de usar .THIS. 
     if (this.y + this.h < canvas.height){
       this.y += this.move  }
   }
    //if(this.isVolMoveUp === true){
       // this.y -= this.move;
    //}else {
      // this.y += this.move;
    
 

 
}
