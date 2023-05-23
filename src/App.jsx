import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import './App.css'
import Formulario from './components/Formulario';
import FooterFedeLedesma from './components/FooterFedeLedesma';

function App() {
  return (
    <>
    <section className='mainPage'>
      <Container className='bg-dark'>
      <h1 className='text-center mt-1 text-light py-3'>Formulario</h1>
      </Container>
      <Formulario></Formulario>
    </section>
      <FooterFedeLedesma></FooterFedeLedesma>
    </>
  )
}

export default App
