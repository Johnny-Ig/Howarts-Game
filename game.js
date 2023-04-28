class Game {
  constructor() {
    this.fondoGame = new Image();
    this.fondoGame.src = "imagenes/castillo.jpg";
    this.isGameOn = true;
    this.duendesArr = [];
    this.harryObj = new Harry();
    this.snichArr = [];
    this.snichPoints = 0;
    this.voldemortObj;
    this.hechizoVolArr = [];
    this.isVoldisparando = true;
    this.hechizoHarryArr = [];
    this.isHarryDisparando = true;
    this.counterContraVoldemort = 5;
    this.counterContraHarry = 5;
  }

  musica = () => {
    const audio = new Audio(
      "SnapSave.io - Harry Potter Theme Song (128 kbps).mp3"
    );
    audio.play();
    audio.volume = 0.2;
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

        h1DOM.innerText = "SNITCH POINTS: " + this.snichPoints;
        if (this.snichPoints === 5) {
          h1DOM.innerText = "FINAL BOSS!!!";
        }
      }
    });
  };

  voldemort = () => {
    if (this.snichPoints === 5 && !this.voldemortObj) {
      this.voldemortObj = new Voldemort();
    }
  };

  hechizoVoldemort = () => {
    if (
      this.hechizoVolArr.length === 0 ||
      this.hechizoVolArr[this.hechizoVolArr.length - 1].x < 600
    ) {
      let hechizoVolObj = new Hechizos(
        this.voldemortObj.x,
        this.voldemortObj.y
      );
      this.hechizoVolArr.push(hechizoVolObj);
    }
  };

  colisionHarryHechizos = () => {
    this.hechizoVolArr.forEach((cadaHechizo) => {
      if (
        cadaHechizo.x < this.harryObj.x + this.harryObj.w - 60 &&
        cadaHechizo.x + cadaHechizo.w > this.harryObj.x &&
        cadaHechizo.y < this.harryObj.y + this.harryObj.h &&
        cadaHechizo.h + cadaHechizo.y > this.harryObj.y
      ) {
        this.hechizoVolArr.shift();

        this.counterContraHarry--;
      }
      if (
        this.hechizoVolArr.indexOf(0).x + this.hechizoVolArr.indexOf(0).w <
        0
      ) {
        this.hechizoVolArr.shift();
      }
    });
  };

  hechizoHarry = () => {
    if (this.snichPoints === 5) {
      let hechizoHarryObj = new HechizosHarry(
        this.harryObj.x + 60,
        this.harryObj.y
      );

      this.hechizoHarryArr.push(hechizoHarryObj);
    }
  };

  colisionVoldemortHechizos = () => {
    this.hechizoHarryArr.forEach((cadaHechizo) => {
      if (
        cadaHechizo.x < this.voldemortObj.x + this.voldemortObj.w + 60 &&
        cadaHechizo.x + cadaHechizo.w > this.voldemortObj.x &&
        cadaHechizo.y < this.voldemortObj.y + this.voldemortObj.h &&
        cadaHechizo.h + cadaHechizo.y > this.voldemortObj.y
      ) {
        this.hechizoHarryArr.shift();
        this.counterContraVoldemort--;
      }
    });
  };
  removeHechizosHarry = () => {
    if (
      this.hechizoHarryArr.length !== 0 &&
      this.hechizoHarryArr[0].x + this.hechizoHarryArr[0].w < 0
    ) {
      this.hechizoHarryArr.splice(0, 1);
      console.log(this.hechizoHarryArr);
    }
  };

  removeHechizosVoldemort = () => {
    if (
      this.hechizoVolArr.length !== 0 &&
      this.hechizoVolArr[0].x + this.hechizoVolArr[0].w < 0
    ) {
      this.hechizoVolArr.splice(0, 1);
      console.log(this.hechizoVolArr);
    }
  };

  counterColision = () => {
    if (this.counterContraVoldemort <= 0) {
      this.winGame();
    } else if (this.counterContraHarry <= 0) {
      this.gameOver();
    }
  };
  winGame = () => {
    this.isGameOn = false;
    canvas.style.display = "none";
    newGameDOM.style.display = "flex";
  };

  gameOver = () => {
    this.isGameOn = false;

    canvas.style.display = "none";
    gameoverPantallaDOM.style.display = "flex";
  };

  dibujarfondo = () => {
    ctx.drawImage(this.fondoGame, 0, 0, canvas.clientWidth, canvas.height);
  };

  limpiezaCanvas = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
  };

  removeDuendes = () => {
    if (
      this.duendesArr.length !== 0 &&
      this.duendesArr[0].x + this.duendesArr[0].w < 0
    ) {
      this.duendesArr.splice(0, 1);
    }
    if (this.snichPoints === 5) {
      for (let i = 0; i < this.duendesArr.length; i++) {
        this.duendesArr.splice(0);
      }
    }
  };

  eliminandoSnich = () => {
    if (this.snichArr[0].x + this.snichArr[0].w < 0) {
      this.snichArr.shift();
    }
    if (this.snichPoints === 5) {
      for (let i = 0; i < this.snichArr.length; i++) {
        this.snichArr.splice(0);
      }
    }
  };

  drawScoreVoldemort = () => {
    if (this.snichPoints === 5) {
      ctx.font = "18px Arial";
      ctx.fillText(
        "VOLDEMORT LIFE:" + this.counterContraVoldemort,
        canvas.width - 180,
        20
      );
      ctx.fillStyle = "red";
    }
  };

  drawScoreHarry = () => {
    if (this.snichPoints === 5) {
      ctx.font = "18px Arial";
      ctx.fillText("HARRY LIVE:" + this.counterContraHarry, 20, 20);
      ctx.fillStyle = "red";
    }
  };

  bucleGame = () => {
    this.limpiezaCanvas();

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

    if (this.hechizoHarryArr.length !== 0) {
      this.hechizoHarryArr.forEach((cadaHechizo) => {
        cadaHechizo.moveHechizoHarry();
      });
    }
    this.colisionHarryHechizos();
    this.colisionVoldemortHechizos();
    this.counterColision();
    this.removeHechizosHarry();
    this.removeHechizosVoldemort();

    this.dibujarfondo();
    this.harryObj.harryDraw();
    if (this.voldemortObj !== undefined) {
      this.voldemortObj.voldemortDraw();
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
      });
    }
    if (this.hechizoHarryArr.length !== 0) {
      this.hechizoHarryArr.forEach((cadaHechizo) => {
        cadaHechizo.hechizoHarryDraw();
      });
    }
    this.drawScoreVoldemort();
    this.drawScoreHarry();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.bucleGame);
    }
  };
}
