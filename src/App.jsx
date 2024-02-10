import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado';
import React, { useState, useEffect } from 'react';
import Spinner from './components/Spinner';




//Contenedor
const Contenedor = styled.div`
  // Media query
    display: block;
    margin: 0 auto;
    //grid-template-columns: repeat(2, 1fr);
    //column-gap: 2remm;
  @media (min-width: 992px) {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

`


// h1
const Heading = styled.h1`
  font-family: 'Jost', sans-serif;
  color: #eceef2;
  margin-top: 4rem;
  font-size: 3rem;
  text-align: center;
  grid-column: span 2;


  &::after{
    content: '';
    width: auto;
    height: 6px;
    background-image: linear-gradient(to right, #55ac98,#234c45);
    display: block;
    margin: 0 auto;
  }
`

//Div de grid
const DivForm = styled.div`
@media (min-width: 992px) {
  display: grid;
  place-items: center;
 // margin: 0 auto;
  // width: 100%;
  //grid-template-columns: repeat(2, 1fr);  
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
}
  
`



function App() {

  const [monedas, setMonedas] = useState({});
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
   if (Object.keys(monedas).length > 0) {
    const trade = async () => {
      setCargando(true)
      setResultado({})
      const {moneda, criptomoneda} = monedas;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setResultado(resultado.DISPLAY[criptomoneda][moneda])

      setCargando(false)
    }

    trade();
  }
  }, [monedas]);

  return (
    <Contenedor>
      <DivForm>
        <Heading>Conoce el valor del dia de tu criptomoneda</Heading>
        <Formulario setMonedas={setMonedas}/>
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/>}
      </DivForm>
    </Contenedor>
  )
}

export default App
