import styled from "@emotion/styled"

const useSelectMonedas = (label) => {
  
    const Label = styled.label`
        color: #eceef2;
        font-family: 'Jost', sans-serif;
    `

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
        </>
    )
    return [SelectMonedas]
}

export default useSelectMonedas
