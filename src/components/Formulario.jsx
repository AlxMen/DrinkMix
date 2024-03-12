import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategorias from "../hooks/useCategorias";
import useBebidas from "../hooks/useBebidas";

const Formulario = () => {

  const [busqueda, setBusqueda] = useState({
    nombre: '',
    categoria: ''
  })
  const [alerta, setAlerta] = useState('')
  const { categorias } = useCategorias()
  const {consultarBebidas} = useBebidas()

  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos son obligatorios')
      return
    }
    setAlerta('')
    consultarBebidas(busqueda)

  }

  return (
    <Form onSubmit={handleSubmit}>
      {alerta && <Alert variant="danger" className="text-center">{alerta}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Tipo de Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="nombre"
              value={busqueda.nombre}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name] : e.target.value
              })}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Categoria de Bebida</Form.Label>
            <Form.Select
              id="categoria"
              name="categoria"
              value={busqueda.categoria}
              onChange={e => setBusqueda({
                ...busqueda,
                [e.target.name] : e.target.value
              })}
            >
              <option>-- Selecciona Categoria --</option>
              {categorias.map(cat => (
                <option 
                  key={cat.strCategory}
                  value={cat.strCategory}
                >
                  {cat.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar Recetas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
