import { Form, Button, Container } from "react-bootstrap";
const Formulario = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Control type="text" placeholder="Nombre EJ: Federico" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Control type="text" placeholder="Apellido Ej: Ledesma" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Control type="number" placeholder="D.N.I Ej: 44555777" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email Ej: fede@gmail.com" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
