import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tipos from './Tipos'
import Pokemons from './Pokemons'
import Habilidad from './Habilidad'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [tipos, setTipos] = useState([])
  const [tipo_id, setTipo] = useState('fire')
  const [pokemon, setPokemon] = useState('charmander')
  const [pokemonImage, setPokemonImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png')
  const [habilidad, setHabilidad] = useState('Fire ball')
  const [habilidades, setHabilidades] = useState([{"ability": {"name": "blaze"}},{"ability": {"name": "solar-power"}}])
  const [habilidadNumero, setHabilidadNumero] = useState(0)
  
  //TIPOS
  async function fetchTipos() {
    try{
      fetch('https://pokeapi.co/api/v2/type').then(function(response){
        if (response.ok) return response.json()}).then(function(data){
          setTipos(data.results)
          console.log(data.results)
        })
    }catch(error) {console.log(error)}
  }
  useEffect(() => {fetchTipos()}, [])

  //POKEMOS
  async function fetchPokemons() {
    try{
      fetch('https://pokeapi.co/api/v2/type/'+tipo_id).then(function(response){
        if (response.ok) return response.json()}).then(function(data){
          setPokemons(data.pokemon)
          console.log(data.pokemon)
        })
    }catch(error) {console.log(error)}
  }
  useEffect(() => {fetchPokemons()}, [tipo_id])

  async function fetchPokemon() {
    try{
      fetch('https://pokeapi.co/api/v2/pokemon/'+pokemon).then(function(response){
        if (response.ok) return response.json()}).then(function(data){
          setPokemonImage(data.sprites.front_default)
          console.log(data.sprites.front_default)
          setHabilidades(data.abilities)
          console.log(data.abilities)
        })
    }catch(error) {console.log(error)}
  }
  useEffect(() => {fetchPokemon()}, [pokemon])

  //HABILIDADES
  useEffect(() => {
    setTimeout(() => {
      console.log(habilidadNumero)
      setHabilidadNumero((habilidadNumero == habilidades.length-1) ? 0 : habilidadNumero+1)
    }, 1000)
  }, [habilidades, habilidad])

  useEffect(function changeHabilidad() {
    console.log('habilidad')
    setHabilidad(habilidades[habilidadNumero].ability.name)
  }, [habilidadNumero])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={pokemonImage} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h2>Tipos <Tipos setTipo={setTipo} data={tipos}></Tipos></h2>
        <h2>Pokemon <Pokemons setPokemon={setPokemon} data={pokemons}></Pokemons></h2>
        <h2>Habilidad: <Habilidad data={habilidad}></Habilidad></h2>
        <h2>Cantidad de habilidades: {habilidades.length}</h2>
      </div>
    </>
  )
}

export default App
