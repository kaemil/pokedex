import React,{useEffect,useState} from 'react';
import PokemonImage from './components/PokemonImage'
import PokemonSwitch from './components/PokemonSwitch'
import PokemonConsoleButton from './components/PokemonConsoleButton'
import PokemonConsole from './components/PokemonConsole'
import './css/media.css'

function App(){
    const [pokemonID,setPokemonID] = useState(1)
    const [pokemonData, setPokemonData] = useState({})

    //Fetching data from PokeAPI
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data)})
    },[pokemonID])

    // Creating eventListeners
    // Making possible for user to use arrow key to change pokemon ID
    useEffect(()=>{
        document.addEventListener('keydown',keyLeft)
        document.addEventListener('keydown',keyRight)
        return()=>{
            document.removeEventListener('keydown',keyLeft)
            document.removeEventListener('keydown',keyRight)
        }
    },)

    const keyLeft = (e) =>{
        if(e.keyCode === 37) idCountDown()
    }

    const keyRight = (e) =>{
       if(e.keyCode === 39) idCountUp()
   }

    //Changing ID using buttons
    const idCountDown = () => 
        (pokemonID === 1) ? setPokemonID(151) : setPokemonID(pokemonID - 1)
    const idCountUp = () => 
        (pokemonID === 151) ? setPokemonID(1) : setPokemonID(pokemonID + 1)

    return(
      <div className='pokedex'>
        <div className='pokedex__leftcard'>
          <PokemonImage 
              pokemonID={pokemonID}
          />
          <PokemonSwitch
            idCountDown={idCountDown}
            idCountUp={idCountUp}
            />
        </div>
        <div className='pokedex__middle'></div>
        <div className='pokedex__rightcard'>              
            <PokemonConsole 
  
            />
            <PokemonConsoleButton 
            pokemonData={pokemonData}
            />
        </div>
      </div>
    )
}

export default App


