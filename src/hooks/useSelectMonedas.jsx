import styled from "@emotion/styled"
import { useState } from 'react';


const useSelectMonedas = (label, opciones) => {
  
    // Usar useSatete en mis propios hooks
    const [state, setState] = useState('');

    const Label = styled.label`
        color: #eceef2;
        font-family: 'Jost', sans-serif;
        display: block;
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 10px;
    `
    const Select = styled.select`
        width: 100%;
        font-size: 18px;
        padding: 6px;
        border-radius: 4px;
    `

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select value={state} onChange={ e => setState(e.target.value)}>
                <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option key= {opcion.id} value={opcion.id}>{opcion.nombre}</option>
                ) )}
            </Select>
            
        </>
    )
    return [state, SelectMonedas]
}

export default useSelectMonedas
