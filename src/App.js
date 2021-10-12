import React,{useEffect,useState} from 'react';
import PokemonImage from './components/PokemonImage'
import PokemonSwitch from './components/PokemonSwitch'
import PokemonConsoleButton from './components/PokemonConsoleButton'
import PokemonConsole from './components/PokemonConsole'
import './css/media.css'
import './css/pokemonTypesStyle.css'
import './css/mediaScreen.css'

function App(){
    const [pokemonID,setPokemonID] = useState(1)
    const [pokemonData, setPokemonData] = useState({})
    const [choosenButton,setChoosenButton] = useState('Name')
    const [status,setStatus] = useState(false)

    //Fetching data from PokeAPI
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
            .then(response =>response.json())
            .then(data => {
                setPokemonData(data)
                setStatus(true)
            })

    },[pokemonID])

    //Changing ID using buttons
    const idCountDown = () => 
        (pokemonID === 1) ? setPokemonID(151) : setPokemonID(pokemonID - 1)
    const idCountUp = () => 
        (pokemonID === 151) ? setPokemonID(1) : setPokemonID(pokemonID + 1)

    //Changing data on consol after button click
    const handleButton = (button) => setChoosenButton (button)

    if(status){
        return(
            <div className='pokedex'>
                <div className='pokedex__leftcard'>
                    <PokemonImage 
                        pokemonID={pokemonID}
                    />
                    <PokemonSwitch
                        id={pokemonID}
                        idCountDown={idCountDown}
                        idCountUp={idCountUp}
                    />
                </div>
                <div className='pokedex__middle'></div>
                <div className='pokedex__rightcard'>              
                    <PokemonConsole 
                        pokemonID={pokemonID}
                        pokemonData={pokemonData}
                        choosenButton={choosenButton}
                    />
                    <PokemonConsoleButton 
                        handleButton={handleButton}
                        pokemonData={pokemonData}
                    />
                </div>
            </div>
        )} else{
            return(
                <h1 className="loading">Loading...</h1>
            )
    }
}

export default App


