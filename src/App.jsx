import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriasProvaider } from "./context/CategoriasProvaider"


function App() {
  
  return (
    <CategoriasProvaider>
      <header className="py-5">
        <h1>Prepara Tus Bebidas</h1>
      </header>
      <Container className="mt-5">
        <Formulario />
      </Container>
    </CategoriasProvaider>
  )
}

export default App
