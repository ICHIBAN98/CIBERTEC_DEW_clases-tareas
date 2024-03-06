import './App.css'
import Pelicula from './componente/Movie'
import listaPeliculas from './data/arregloPeliculas'

function App() {

  let peliculasMostrar = listaPeliculas.map(function(peli){
    return <Pelicula tit={peli.titulo} sinop={peli.sinopsis} anio={peli.anio} gen={peli.genero} dur={peli.duracion} img={peli.imagen}/>
  })

  return(
    <div className='cajaCompleta'>
      <h1>Las 3 películas más populares del Perú</h1>
      <div className='cajaMostrar'>
       {peliculasMostrar}
      </div>
    </div>
  )

}

export default App
 