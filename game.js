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
    this.snichPoints = 0;
    this.voldemortObj;
   
    this.hechizoVolArr = [];
    this.isVoldisparando = true;
  }

  // METODOS DE GAME => TODAS LAS ACCIONES QUE SE REALIZAN EN EL JUEGO

  // aparecen los duendes en diferentes distancias (math.randon)
  // los duendes se mueven hacia harry
  //que harry se mueva de arriba a abajo
  //el contador aumento
  //colisiones de harry contra los duendes

  //se termina el juego
  musica = () => {
    const audio = new Audio(
      "SnapSave.io - Harry Potter Theme Song (128 kbps).mp3"
    );
    audio.play();
    audio.volume = 0.5;
  };

  entradaDuendes = () => {
    if (
      this.duendesArr.length === 0 ||
      this.duendesArr[this.duendesArr.length - 1].x < 800
    ) {
      let posicionRandom = Math.random() * 380;
      let newDuende = new Duendes(posicionRandom);
      this.duendesArr.push(newDuende);
    }
  };
  entradaSnich = () => {
    if (
      this.snichArr.length === 0 ||
      this.snichArr[this.snichArr.length - 1].x < 700
    ) {
      let posicionRandomSnitch = Math.random() * 380;
      let newSnich = new Snich(posicionRandomSnitch);
      this.snichArr.push(newSnich);
    }
  };
  colisionHarryDuendes = () => {
    this.duendesArr.forEach((cadaDuende) => {
      if (
        cadaDuende.x < this.harryObj.x + this.harryObj.w - 60 &&
        cadaDuende.x + cadaDuende.w > this.harryObj.x &&
        cadaDuende.y < this.harryObj.y + this.harryObj.h &&
        cadaDuende.h + cadaDuende.y > this.harryObj.y
      ) {
        this.gameOver();
      }
    });
  };
  removeSnich = () => {
    this.snichArr.forEach((cadaSnich) => {
      if (
        cadaSnich.x < this.harryObj.x + this.harryObj.w - 60 &&
        cadaSnich.x + cadaSnich.w > this.harryObj.x &&
        cadaSnich.y < this.harryObj.y + this.harryObj.h &&
        cadaSnich.h + cadaSnich.y > this.harryObj.y
      ) {
        this.snichArr.shift();
        this.snichPoints++;
        console.log(this.snichPoints);
        h1DOM.innerText = "SNITCH POINTS: " + this.snichPoints;
        if (this.snichPoints === 1) {
          h1DOM.innerText = "FINAL BOSS!!!";
        }
      }
    });
  };

  voldemort = () => {
    if (this.snichPoints === 1 && !this.voldemortObj) {
      this.voldemortObj = new Voldemort();
      console.log("creando a voldemort");
      
    }
  };

  hechizoVoldemort = () => {
    if (this.isVoldisparando === true && this.snichArr.length === 0 ||
      this.snichArr[this.snichArr.length - 1].x < 200) {
      let hechizoVolObj = new Hechizos(200, 200);
      this.hechizoVolArr.push(hechizoVolObj);
      
    }
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none";
    gameoverPantallaDOM.style.display = "flex";
    //h1DOM.style.display= "none"
  };

  dibujarfondo = () => {
    ctx.drawImage(this.fondoGame, 0, 0, canvas.clientWidth, canvas.height);
  };

  limpiezaCanvas = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  };

  removeDuendes = () => {
    if (this.duendesArr[0].x + this.duendesArr[0].w < 0) {
      this.duendesArr.shift();
    }
    if (this.snichPoints === 1) {
      for (let i = 0; i < this.duendesArr.length; i++) {
        this.duendesArr.splice(0);
      }
    }
  };

  eliminandoSnich = () => {
    if (this.snichArr[0].x + this.snichArr[0].w < 0) {
      this.snichArr.shift();
    }
    if (this.snichPoints === 1) {
      for (let i = 0; i < this.snichArr.length; i++) {
        this.snichArr.splice(0);
      }
    }
  };

  bucleGame = () => {
    //1 limpieza del canvas
    this.limpiezaCanvas();
    //2 acciones y movimientos de los elementos
    this.entradaDuendes();
    this.entradaSnich();
    this.duendesArr.forEach((cadaDuende) => {
      cadaDuende.move();
      this.colisionHarryDuendes();
    });
    this.removeDuendes();
    this.eliminandoSnich();
    this.snichArr.forEach((cadaSnich) => {
      cadaSnich.moveSnich();
      this.removeSnich();
    });
    this.voldemort();
    if (this.voldemortObj !== undefined) {
      this.voldemortObj.moveVoldemort();
      this.hechizoVoldemort();
      this.hechizoVolArr.forEach((cadaHechizo) => {
        cadaHechizo.moveHechizo();
      });
      this.voldemortObj.colisionVoldemort();
    }
    if (this.hechizoVolArr.length !== 0) {
      this.hechizoVolArr.forEach((cadaHechizo) => {
        cadaHechizo.moveHechizo();
      });
    }
    //this.musica()
    // 3 dibujado de los elemetos

    this.dibujarfondo();
    this.harryObj.harryDraw();
    if (this.voldemortObj !== undefined) {
      this.voldemortObj.voldemortDraw();
      // this.hechizoVolObj.hechizoVolDraw()
    }

    this.snichArr.forEach((cadaSnich) => {
      cadaSnich.drawSnich();
    });
    this.duendesArr.forEach((cadaDuende) => {
      cadaDuende.drawDuende();
    });
    if (this.hechizoVolArr.length !== 0) {
      this.hechizoVolArr.forEach((cadaHechizo) => {
        cadaHechizo.hechizoVolDraw();
        console.log("creando hechizo");
      });
    }
    // recursion (requestAnimationFrame)
    if (this.isGameOn === true) {
      requestAnimationFrame(this.bucleGame);
    }
  };
}
