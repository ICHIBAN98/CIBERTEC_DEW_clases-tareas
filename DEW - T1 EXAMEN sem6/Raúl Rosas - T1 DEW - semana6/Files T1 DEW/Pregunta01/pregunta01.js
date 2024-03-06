let numeroJ1 = 0;
let numeroJ2 = 0;

function randomizer() {
    return Math.floor(Math.random()*6+1);
}

function jugada1(){
    numeroJ1 = randomizer();
}

function jugada2(){
    numeroJ2 = randomizer();
}

function mostrarResultados(){
    if (numeroJ1 > numeroJ2) {

         let txtResult = "Número jugador 1: " + numeroJ1 + "<br>" +
        "Número jugador 2: " + numeroJ2 + "<br>" +
        "GANADOR: ¡¡¡Jugador 1!!!" 

        let result = document.getElementById("RESULTADO");
        result.innerHTML = txtResult;


    } else if (numeroJ1 < numeroJ2) {
        
        let txtResult = "Número jugador 1: " + numeroJ1 + "<br>" +
        "Número jugador 2: " + numeroJ2 + "<br>" +
        "GANADOR: ¡¡¡Jugador 2!!!" 

        let result = document.getElementById("RESULTADO");
        result.innerHTML = txtResult;

    } else {
        let txtResult = "Número jugador 1: " + numeroJ1 + "<br>" +
            "Número jugador 2: " + numeroJ2 + "<br>" +
            "GANADOR: Ninguno, esto es un ¡¡¡EMPATE!!!"
        
            let result = document.getElementById("RESULTADO");
            result.innerHTML = txtResult;

    }
}
