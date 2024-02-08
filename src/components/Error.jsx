import styled from '@emotion/styled'

const Texto = styled.div`
border-radius: 5px;
    border-width: 2px; /* Ancho del borde */
    border-style: solid;
    border-image: linear-gradient(to right, #55ac98,#234c45);
    border-image-slice: 1;
    color: #eceef2;
    padding: 10px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Jost', sans-serif;
    font-weight: 700;
    text-align: center;
    margin: 20px 400px 0 400px;
    
   
`
const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error
