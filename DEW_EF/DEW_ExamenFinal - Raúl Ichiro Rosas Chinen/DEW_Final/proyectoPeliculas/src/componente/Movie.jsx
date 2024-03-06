import "./Movie.css"

function Pelicula({tit,sinop,anio,gen,dur,img}){
    return(
        <div className="caja">
            <img src={img} alt="" />
            <h2>{tit}</h2>
            <p>{sinop}</p>
            <p>{anio} - {gen} - {dur}</p>
        </div>
    )
}

export default Pelicula;