import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas';


const InputSubmit = styled.input`
    background-image: linear-gradient(to right, #55ac98,#234c45);
    border: none;
    width: 30%;
    padding: 10px;
    color: #d5d9e2;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease-out;

    &:hover{
        background-color: #afe0d1;
        cursor: pointer;
    }
`

const Formulario = () => {
  
  const [ SelectMonedas ] = useSelectMonedas('Elige tu moneda');

  return (
    <form>
        <SelectMonedas />
        <InputSubmit type="submit" value="cotizar" />
    </form>
  )
}

export default Formulario
