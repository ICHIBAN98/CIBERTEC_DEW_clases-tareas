import "./Card.css"

function Tarjetas(props){
    return(
        <div className="cajaTarjeta">
            <h2>{props.titulo}</h2>
            <p>{props.desc}</p>
        </div>
    );
}

export default Tarjetas;
