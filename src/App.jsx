import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebida from "./components/ModalBebida";
import { CategoriasProvaider } from "./context/CategoriasProvaider";
import { BebidasProvaider } from "./context/BebidasProvaider";

function App() {
  return (
    <CategoriasProvaider>
      <BebidasProvaider>
        <header className="py-5">
          <h1>Prepara Tus Bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebidas />
          <ModalBebida />
        </Container>
      </BebidasProvaider>
    </CategoriasProvaider>
  );
}

export default App;
