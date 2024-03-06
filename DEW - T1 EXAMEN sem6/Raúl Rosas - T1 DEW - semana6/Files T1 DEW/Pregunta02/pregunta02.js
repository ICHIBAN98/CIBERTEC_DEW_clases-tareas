let carrusel = ["imagenes/banner1.jpg","imagenes/banner2.jpg","imagenes/banner3.jpg","imagenes/banner4.jpg"];
let indiceCarrusel = 0;

function funcionaCarrusel() {
    
    indiceCarrusel++;
    
    if(indiceCarrusel==4){
        indiceCarrusel=0;
    }

    let imagen = document.getElementById("imagenMostrada");
    imagen.src = carrusel[indiceCarrusel]; 

}

setInterval(funcionaCarrusel,3000);