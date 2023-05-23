import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './App.css'
import Formulario from './components/Formulario';

function App() {
  return (
    <section>
      <Container className='bg-dark'>
      <h1 className='text-center mt-1 text-light py-3'>Formulario</h1>
      </Container>
      <Formulario></Formulario>
    </section>
  )
}

export default App
