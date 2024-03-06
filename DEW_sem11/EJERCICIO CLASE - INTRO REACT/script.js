/* Código de JS */

//función flecha para crear el componente
let Redes = (params) => (
  <div className="elementoReact">
      <img src={`https://logo.clearbit.com/${params.url}`}/>
     <span>{params.name}</span>
  </div>
);


//Arreglo de Objetos
let redesSociales = [
    {
        url: "facebook.com",
        name:"Facebok"
    },
    {
        url: "twitter.com",
        name:"Twitter"
    },
    {
      url: "whatsapp.com",
      name:"WhatsApp"
  },
  {
    url: "instagram.com",
    name:"Instagram"
},
{
  url: "pinterest.com",
  name:"Pinterest"
},

];



//Mostrar o rederizar en el HTML
let mostrarLista = redesSociales.map((propRed) => Redes(propRed));

ReactDOM.render(mostrarLista,document.getElementById("root"));