import React from 'react'

export default function Pokemons() {

    //const [pokemons,setPokemons] = useState([])
    const pokemons = ['Bulbasaur', 'Charmander', 'Squirtle']
    return (
    <>
        <h1>Pokemon</h1>
        <select>
            {pokemons.map(pokemon => <option key={pokemon}>{pokemon}</option>)}
        </select>
    </>
  )
}
