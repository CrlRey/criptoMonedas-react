import styled from "@emotion/styled"

const Resultado = ({resultado}) => {
    const {PRICE, LASTUPDATE, HIHGDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL} = resultado;
  return (
    <div>
      <p> El precio es de: <span>{resultado.PRICE}</span> </p>
      <p> El precio mas alto es de: <span>{resultado.HIHGDAY}</span> </p>
      <p> El precio mas bajo es de: <span>{resultado.LOWDAY}</span> </p>
      <p> Variacion de las ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></p>
      <p> Ultima actualizacion: <span>{resultado.LASTUPDATE}</span></p>
    </div>
  )
}

export default Resultado
