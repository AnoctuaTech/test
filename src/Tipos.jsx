import React from 'react'

export default function Tipos({setTipo,data}) {
    
    const handleTipo = (e) => {
        setTipo(e.target.value)
    }

    return (
    <>
        <select name="tipo" id="tipo" onChange={handleTipo}>
            {data.map(tipo => <option key={tipo.id} value={tipo.id}>{tipo.name}</option>)}
        </select>
    </>
  )
}
