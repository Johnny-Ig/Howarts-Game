// * VARIABLES GLOBALES 

const pantallaInicioDOM = document.querySelector("#pantalla-inicio");
const gameoverPantallaDOM = document.querySelector("#gameover-pantalla");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");
const pauseBtnDOM = document.querySelector("#pause");
let h1DOM = document.querySelector("#counter");
const instruccionesDOM= document.querySelector("#instrucciones")
const ctx = canvas.getContext("2d");

let gameObj;

// FUNCIONES PARA MANEJO DE ESTADO

const startGame = () => {
    console.log("intentando iniciar el juego")

 // 1. CAMBIAR LAS PANTALLAS DEL JUEGO
 pantallaInicioDOM.style.display = "none"
 canvas.style.display = "block"
 instruccionesDOM.style.display = "none"
 
 // 2 CREAR LOS ELEMENTOS DEL JUEGO
   gameObj = new Game()
 console.log(gameObj)

 // 3. INICIAR EL BUCLE DEL JUEGO (RECURSION)

   gameObj.bucleGame()

}

const restartGame = () => {
  gameoverPantallaDOM.style.display = "none"
 canvas.style.display = "block"
 instruccionesDOM.style.display= "none"
 gameObj = new Game()
 gameObj.bucleGame()
}






// ADD EVENT LISTENERS

startBtnDOM.addEventListener("click",startGame )
window.addEventListener("keydown", (event) => {
    
    if(gameObj !== undefined && event.code === "ArrowUp") {
        gameObj.harryObj.movesUp() 
        }     if (gameObj !== undefined && event.code === "ArrowDown"){
            gameObj.harryObj.movesDown() 
        }

    
})


restartBtnDOM.addEventListener("click", restartGame)

