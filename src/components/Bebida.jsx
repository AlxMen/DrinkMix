import { Col, Card, Button, CardBody } from "react-bootstrap"

const Bebida = ({bebida}) => {
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top" 
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>

        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bebida