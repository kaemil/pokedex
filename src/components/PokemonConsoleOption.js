import React from "react"
import RadarChart from './Radar'
function PokemonConsoleOption({pokemonID,pokemonData,choosenButton}){ 
    // Capitalize function
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }   

    switch (choosenButton.toLowerCase()){
        case 'name':
            return (
            <>
            <div className={`pokedex__${choosenButton.toLowerCase()}--name`} key={choosenButton}>{choosenButton}</div>
            <div className={`pokedex__${choosenButton.toLowerCase()}--value`} key={pokemonID}>
            {capitalize(pokemonData.name)}
            <br/>
            #{pokemonID}
            </div></>
            )
        case 'stats':
            return (
                <>
                    <RadarChart key='chart' pokemonData={pokemonData}/>
                </>
            )
        case 'weight':
            return (
                <>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--name`} key={choosenButton}>{choosenButton}</div>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--value`}>{pokemonData.weight} kg</div>
                </>
            )
        case 'height':
            return (
                <>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--name`} key={choosenButton}>{choosenButton}</div>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--value`}>{pokemonData.height/10} m</div>
                </>
            )
        case 'abilities':
            return (
                <>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--name`}>{choosenButton}</div>
                    {pokemonData.abilities.map((element,index) => 
                    <div className={`pokedex__${choosenButton.toLowerCase()}--value`} key={index}>{element.ability.name}</div>)}
                </>
            )
        case 'types':
            return (
                <>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--name`}>{choosenButton}</div>
                    <div className={`pokedex__${choosenButton.toLowerCase()}--${choosenButton.toLowerCase()}`}>
                    {pokemonData.types.map((element,index) => 
                    <div className={`pokedex__${choosenButton.toLowerCase()}--${element.type.name}`} key={index}>{element.type.name}</div>)}
                    </div>
                </>)
        default:
    }
}

export default PokemonConsoleOption