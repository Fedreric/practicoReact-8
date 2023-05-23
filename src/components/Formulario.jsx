import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');

    return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Control type="text" placeholder="Nombre EJ: Federico" onChange={(e)=>setNombre(e.target.value)} value={nombre}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Control type="text" placeholder="Apellido Ej: Ledesma" onChange={(e)=>setApellido(e.target.value)} value={apellido}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Control type="number" placeholder="D.N.I Ej: 44555777" onChange={(e)=>setDni(e.target.value)} value={dni}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control type="email" placeholder="Email Ej: fede@gmail.com" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
