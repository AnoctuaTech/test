import React from 'react'

export default function Tipos({setTipo}) {
    const tipos = [{name:'Water', id:11}, {name:'Fire', id:12}, {name:'Grass', id:13}];
    return (
    <>
        <h1>Tipos</h1>
        <select onSelect={setTipo(value)}>
            {tipos.map(tipo => <option key={tipo.id} value={tipo.id}>{tipo.name}</option>)}
        </select>
    </>
  )
}
