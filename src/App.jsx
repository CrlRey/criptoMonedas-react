import styled from '@emotion/styled'
import Formulario from './components/Formulario'


//Contenedor
const Contenedor = styled.div`
  text-align: center;
  max-width: 1500px;
  margin: 0 auto;
  // Media query
  /*@media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2remm;
  }*/

`


// h1
const Heading = styled.h1`
  font-family: 'Jost', sans-serif;
  color: #eceef2;
  margin-top: 4rem;
  font-size: 3rem;


  &::after{
    content: '';
    width: 950px;
    height: 6px;
    background-image: linear-gradient(to right, #55ac98,#234c45);
    display: block;
    margin: 10px auto 0 auto;
  }
`



function App() {

  return (
    <Contenedor>
      <Heading>Conoce el valor del dia de tu criptomoneda</Heading>
      <Formulario/>
    </Contenedor>
  )
}

export default App
