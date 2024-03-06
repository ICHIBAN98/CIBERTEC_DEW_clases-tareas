import "./Card.css"

function Tarjeta({tit,desc,url}){
    return(
        <div className="cajaTarjeta">
            <h2>{tit}</h2>
            <p>{desc}</p>
            <img src={url} alt="" />
        </div>
    )
}

export default Tarjeta;