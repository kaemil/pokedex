import React,{useEffect,useState} from 'react';
import PokemonImage from './components/PokemonImage'
import PokemonSwitch from './components/PokemonSwitch'
import PokemonConsoleButton from './components/PokemonConsoleButton'
import PokemonConsole from './components/PokemonConsole'
import './css/media.css'

function App(){
    const [pokemonID,setPokemonID] = useState(1)
    const [pokemonData, setPokemonData] = useState({})
    const [choosenButton,setChoosenButton] = useState('Name')

    //Fetching data from PokeAPI
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            .then(response => response.json())
            .then(data => {
                setPokemonData(data)})
    },[pokemonID])

    //Changing ID using buttons
    const idCountDown = () => 
        (pokemonID === 1) ? setPokemonID(151) : setPokemonID(pokemonID - 1)
    const idCountUp = () => 
        (pokemonID === 151) ? setPokemonID(1) : setPokemonID(pokemonID + 1)

    //Changing data on consol after button click
    const handleButton = (button) => setChoosenButton (button)
    

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
                choosenButton={choosenButton}
            />
            <PokemonConsoleButton 
            handleButton={handleButton}
            pokemonData={pokemonData}
            />
        </div>
      </div>
    )
}

export default App


