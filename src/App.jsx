import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado';
import React, { useState, useEffect } from 'react';




//Contenedor
const Contenedor = styled.div`
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
  text-align: center;


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

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});

  useEffect(() => {
   if (Object.keys(monedas).length > 0) {
    const trade = async () => {
      const {moneda, criptomoneda} = monedas;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setResultado(resultado.DISPLAY[criptomoneda][moneda])
    }

    trade();
  }
  }, [monedas]);

  return (
    <Contenedor>
      <Heading>Conoce el valor del dia de tu criptomoneda</Heading>
      <Formulario setMonedas={setMonedas}/>
      {resultado.PRICE && <Resultado resultado={resultado}/>}
    </Contenedor>
  )
}

export default App
