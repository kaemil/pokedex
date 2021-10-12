import React from 'react';
import PokemonConsoleOption from './PokemonConsoleOption'
//Component to render data

function PokemonConsole({pokemonID,pokemonData,choosenButton}){
        
    return(
        <div className="pokedex__screen">
            <div className={`pokedex__${choosenButton.toLowerCase()}`}> 
                <PokemonConsoleOption 
                    pokemonID={pokemonID}
                    pokemonData={pokemonData}
                    choosenButton={choosenButton}
                />
            </div>
        </div>
    )
}


export default PokemonConsole