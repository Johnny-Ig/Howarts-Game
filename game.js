class Game {
  constructor() {
    //PPROPIEDADES DE GAME => TODOS LOS ELEMENTOS QUE EXISTEN EN EL JUEGO
    //el fondo
    this.fondoGame = new Image();
    this.fondoGame.src = "imagenes/castillo.jpg";
    // duendes
    //harrypotter
    this.harryObj = new Harry()
    // el contador
    // boton de pausa
  }

  // METODOS DE GAME => TODAS LAS ACCIONES QUE SE REALIZAN EN EL JUEGO

  // aparecen los duendes en diferentes distancias (math.randon)
  // los duendes se mueven hacia harry
  //que harry se mueva de arriba a abajo
  //el contador aumento
  //colisiones de harry contra los duendes
  //se termina el juego

  dibujarfondo = () => {
    ctx.drawImage(this.fondoGame, 0, 0, canvas.clientWidth, canvas.height);
  };

  bucleGame = () => {
    //1 limpieza del canvas

    //2 acciones y movimientos de los elementos

    // 3 dibujado de los elemetos

    this.dibujarfondo();
    this.harryObj.harryDraw()

    // recursion (requestAnimationFrame)
    requestAnimationFrame(this.bucleGame);
  };
}
