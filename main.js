// * VARIABLES GLOBALES 

const pantallaInicioDOM = document.querySelector("#pantalla-inicio");
const gameoverPantallaDOM = document.querySelector("#gameover-pantalla");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

let gameObj;

// FUNCIONES PARA MANEJO DE ESTADO

const startGame = () => {
    console.log("intentando iniciar el juego")

 // 1. CAMBIAR LAS PANTALLAS DEL JUEGO
 pantallaInicioDOM.style.display = "none"
 canvas.style.display = "block"

 // 2 CREAR LOS ELEMENTOS DEL JUEGO
   gameObj = new Game()
 console.log(gameObj)

 // 3. INICIAR EL BUCLE DEL JUEGO (RECURSION)

   gameObj.bucleGame()

}








// ADD EVENT LISTENERS

startBtnDOM.addEventListener("click",startGame )
window.addEventListener("keydown", (event) => {
    console.log("presionando", event.code)
    if(event.code === "ArrowUp") {
        gameObj.harryObj.movesUp() 
        }    else if (event.code === "ArrowDown"){
            gameObj.harryObj.movesDown() 
        }

    
})

