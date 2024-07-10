import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="hola desde ItemListContainer"/>
      <div>HOLA MUNDO</div>
    </>
  )
}

export default App
