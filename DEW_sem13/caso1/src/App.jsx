import './App.css'
import Tarjeta from './componentes/Card'
import redesSociales from './data/redes'

function App() {

  let mostrarLista = redesSociales.map(function(redSocial){
    return <Tarjeta tit={redSocial.titulo} desc={redSocial.descripcion} url={redSocial.imagen}/>
  })

  return (
      <div>
        <h1>Hola mundo</h1>
        <div className='conteTarjetas'>
          {mostrarLista}
        </div>
      </div>
  )
}

export default App
