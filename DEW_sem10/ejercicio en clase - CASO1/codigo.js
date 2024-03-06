//Archivo de JS


//Crear la Clase Jugador
class Jugador{
	constructor(nombre,numCamiseta,edad,lesionado){
		this.nombre 		= nombre;
		this.numCamiseta 	= numCamiseta;
		this.edad 			= edad;
		this.lesionado 		= lesionado;
	}
}

//Instanciar 5 objetos usando esta clase
/*let Jugador1 = new Jugador("Messi",10,35,false);
let Jugador2 = new Jugador("Neymar",7,33,true);
let Jugador3 = new Jugador("Gianluca",9,32,true);*/

//Asociar los objetos a un arreglo
let jugadores = [];

jugadores.push(new Jugador("Messi",10,35,false));
jugadores.push(new Jugador("Neymar",7,33,true));
jugadores.push(new Jugador("Gianluca",9,32,true));
jugadores.push(new Jugador("Paolo",9,38,false));

//Mostrar el arreglo completo

for(let jugador of jugadores){
	//Crear una caja DIV
	let caja = document.createElement("div");
	
	//Insertar elementos en el interior de la caja
	caja.innerHTML = `<h2>${jugador.nombre}</h2>
					  <h3>${jugador.numCamiseta}</h3>`;

	//Insertar el elemento hijo dentro del padre				  
	document.body.appendChild(caja);
	//Aplicar estilos a la caja
	caja.className = "fondo";				  	
}



//Mostrar los objetos creados
/*document.write(`Nombre: ${Jugador1.nombre}<hr>`);
document.write(`Nombre: ${Jugador2.nombre}<hr>`);
document.write(`Nombre: ${Jugador3.nombre}<hr>`);*/

//`texto de cadena de caracteres ${expresión} texto adicional`