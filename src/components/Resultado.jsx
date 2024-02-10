import styled from "@emotion/styled"

const DivRes = styled.div`
display: flex;
align-items: center;
  color: #eceef2;
  font-family: 'Jost', sans-serif;
  font-size: 20px;
`

const Span = styled.span`
  font-weight: 700;
`
const Imagen = styled.img`
  //display: block;
  width: 150px;
`
const Resultado = ({resultado}) => {
    const {PRICE, LASTUPDATE, HIHGDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL} = resultado;
  return (
    <DivRes>
      <Imagen src={`https://cryptocompare.com${IMAGEURL}`} alt="imagen moneda" />
      <div>
        <p> El precio es de: <Span>{PRICE}</Span> </p>
        <p> El precio mas alto es de: <Span>{HIHGDAY}</Span> </p>
        <p> El precio mas bajo es de: <Span>{LOWDAY}</Span> </p>
        <p> Variacion de las ultimas 24 horas: <Span>{CHANGEPCT24HOUR}</Span></p>
        <p> Ultima actualizacion: <Span>{LASTUPDATE}</Span></p>
      </div>
    </DivRes>
  )
}

export default Resultado
