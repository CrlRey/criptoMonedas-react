import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';
import Resultado from './Resultado';
import { monedas } from '../data/monedas';
import { useState, useEffect } from 'react';
import Error from './Error';



const FormArea = styled.form`
  height: 100%;
  width: 90%;
  padding-left: 11px;
`
const InputSubmit = styled.input`
    display: block;
    background-image: linear-gradient(to right, #55ac98,#234c45);
    border: none;
    width: 100%;
    padding: 10px;
    color: #d5d9e2;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 20px;

    &:hover{
        background-color: #afe0d1;
        cursor: pointer;
    }
`

/*const DivForm = styled.div`
  display: grid;
  place-items: center;
 // margin: 0 auto;
  // width: 100%;
  grid-template-columns: repeat(2, 1fr);  
`*/

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  // Label del primer select
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
  const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu criptomoneda', criptos);

  // Consultar la API
  useEffect(() => {
    const consultarApi = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

      const respuesta = await fetch(url)
      const resultado = await respuesta.json()

      const arrayCripto = resultado.Data.map(cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,

        }

      return objeto
      })

      setCriptos(arrayCripto)
    }
    consultarApi();
  }, []);

  //Validar el form
  const handleSubmit = e => {
    e.preventDefault()

    if ([moneda, criptomoneda].includes('')) {
        setError(true)

       
        return
    }

    setError(false)
    setMonedas({
      moneda,criptomoneda
    })
  }

  return (

    <> 
        <FormArea onSubmit={handleSubmit}>
          <SelectMonedas />
          <SelectCriptomoneda />
          <InputSubmit type="submit" value="cotizar" />
        </FormArea>
      {error && <Error>Todos los campos son obligatorios</Error>}
    </>
  )
}

export default Formulario
