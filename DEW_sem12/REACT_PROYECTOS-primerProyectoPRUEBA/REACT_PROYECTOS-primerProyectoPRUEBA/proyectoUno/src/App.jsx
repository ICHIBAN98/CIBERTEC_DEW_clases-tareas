import './App.css'
import Tarjetas from './componentes/Card'

function App() {

  return (
    <div className='cajaTodo'>
      <h1>Hola MUNDO</h1>
      <div className='contenedorTarjetas'>
        <Tarjetas titulo="Título 01" desc="Descripción del Producto1"/>
        <Tarjetas titulo="Título 02" desc="Descripción del Producto2"/>
        <Tarjetas/>
        <Tarjetas/>
      </div>
    </div>
  )
}

export default App
