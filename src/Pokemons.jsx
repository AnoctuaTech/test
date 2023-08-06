import React from 'react'

export default function Pokemons({setPokemon,data = []}) {
    
    const handlePokemon = (e) => {
        setPokemon(e.target.value)
        console.log(e.target.value)
    }

    return (
    <>
        <select onChange={handlePokemon}>
            {data.map(p => <option key={p.pokemon.name}>{p.pokemon.name}</option>)}
        </select>
    </>
  )
}
