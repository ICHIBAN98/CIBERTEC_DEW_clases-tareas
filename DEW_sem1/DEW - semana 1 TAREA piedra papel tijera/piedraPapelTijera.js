let user = prompt("¡BIENVENIDO!" + "\n" + "\n" +

"Escoge una opción:"  + "\n" + "\n" +

"N° 0 = Piedra" + "\n" + 
"N° 1 = Papel" + "\n" +
"N° 2 = Tijera" + "\n");

//Nombres para lo escogido por el usuario
/*if (user == 0) {
    let uPiedra = 0;
} else if (user == 1) {
    let uPapel = 1;
} else {
    let uTijera = 2;
}*/

//Randomizer para el bot
let bot = randomizer();

function randomizer() {
    return Math.floor(Math.random()*3);
}
/*
//Nombres para lo escogido por el bot
if (bot == 0) {
    let bPiedra = 0;
} else if (bot == 1) {
    let bPapel = 1;
} else {
    let bTijera = 2;
}*/

//Condicionales

//Posibibilidades si el usuario escoge PIEDRA
if(user == 0 && bot == 0) {
    alert ("BOT escogió:" + "\n" +
    "PIEDRA" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "PIEDRA" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡EMPATE!");
}  else if(user == 0 && bot == 1) {
    alert ("BOT escogió:" + "\n" +
    "PAPEL" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "PIEDRA" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡PERDISTE!");
} else if (user == 0 && bot == 2) {
    alert ("BOT escogió:" + "\n" +
    "TIJERA" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "PIEDRA" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡GANASTE!");
} else








//Posibibilidades si el usuario escoge PAPEL
if(user == 1 && bot == 0){
    alert("BOT escogió:" + "\n" +
    "PIEDRA" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "PAPEL" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡GANASTE!");
} else if(user == 1 && bot == 2){
    alert("BOT escogió:" + "\n" +
    "TIJERA" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "PAPEL" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡PERDISTE!");
} else if (user == 1 && bot == 1){
    alert("BOT escogió:" + "\n" +
    "PAPEL" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "PAPEL" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡EMPATE!");
} else






//Posibilidades si el usuario escoge TIJERA
if(user == 2 && bot == 0) {
    alert ("BOT escogió:" + "\n" +
    "PIEDRA" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "TIJERA" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡PERDISTE!");
} else if (user == 2 && bot == 1) {
    alert ("BOT escogió:" + "\n" +
    "PAPEL" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "TIJERA" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡GANASTE!");
} else {
    alert ("BOT escogió:" + "\n" +
    "TIJERA" + "\n" +"\n" +
    
    "USUARIO escogió:" + "\n" +
    "TIJERA" + "\n" +"\n" +

    "RESULTADO:" + "\n" +
    "¡EMPATE!");
}