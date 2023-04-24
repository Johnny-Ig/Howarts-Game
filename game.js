class Game {
  constructor() {
    //PPROPIEDADES DE GAME => TODOS LOS ELEMENTOS QUE EXISTEN EN EL JUEGO
    //el fondo
    this.fondoGame = new Image();
    this.fondoGame.src = "imagenes/castillo.jpg";
    this.isGameOn = true;
    // duendes
    this.duendesArr = [];
    //harrypotter
    this.harryObj = new Harry();
    //snich
    this.snichArr = [];
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
 
  


  entradaDuendes = () => {
    if (
      this.duendesArr.length === 0 ||
      this.duendesArr[this.duendesArr.length - 1].x < 900
    ) {
      let posicionRandom = Math.random() * 450;
      let newDuende = new Duendes(posicionRandom);
      this.duendesArr.push(newDuende);
    }
  };
  entradaSnich = () => {
    if (
      this.snichArr.length === 0 ||
      this.snichArr[this.snichArr.length - 1].x < 800
    ) {
      let posicionRandomSnitch = Math.random() * 450;
      let newSnich = new Snich(posicionRandomSnitch);
      this.snichArr.push(newSnich);
    }
  };
  colisionHarryDuendes = () => {
    this.duendesArr.forEach((cadaDuende) => {
      if (
        cadaDuende.x < this.harryObj.x + this.harryObj.w &&
        cadaDuende.x + cadaDuende.w > this.harryObj.x &&
        cadaDuende.y < this.harryObj.y + this.harryObj.h &&
        cadaDuende.h + cadaDuende.y > this.harryObj.y
      ) {
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none"
    gameoverPantallaDOM.style.display ="flex"

  }

  dibujarfondo = () => {
    ctx.drawImage(this.fondoGame, 0, 0, canvas.clientWidth, canvas.height);
  };

  limpiezaCanvas = () =>{
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height)
  }

  removeDuendes = () => {
    if(this.duendesArr[0].x + this.duendesArr[0].w <0) {
      this.duendesArr.shift()
    }
  }



  bucleGame = () => {
    //1 limpieza del canvas
      this.limpiezaCanvas()
    //2 acciones y movimientos de los elementos
    this.entradaDuendes();
    this.entradaSnich();
    this.duendesArr.forEach((cadaDuende) => {
      cadaDuende.move();
      this.colisionHarryDuendes();
    });
    this.removeDuendes()
    this.snichArr.forEach((cadaSnich) => {
      cadaSnich.moveSnich();

     })
    



    // 3 dibujado de los elemetos

    this.dibujarfondo();
    this.harryObj.harryDraw();
    this.snichArr.forEach((cadaSnich) => {
      cadaSnich.drawSnich();
    });
    this.duendesArr.forEach((cadaDuende) => {
      cadaDuende.drawDuende();
    });
    
    
    // recursion (requestAnimationFrame)
    if(this.isGameOn === true) {
    requestAnimationFrame(this.bucleGame)
    }
  };
}
