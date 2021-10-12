import React from "react"

function PokemonConsoleOption({pokemonID,pokemonData,choosenButton}){ 

    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    switch (choosenButton.toLowerCase()){
        case 'name':
            return (
            <>
            <div className={`pokedex__${choosenButton}--name`} key={choosenButton}>{capitalize(pokemonData.name)}</div>
            <div key={pokemonID}>#{pokemonID}</div></>
            )
            case 'stats':
                return (
                    <>
                        <div>WYKRES</div>
                    </>
                )
            case 'weight':
                return (
                    <>
                        <div className={`pokedex__${choosenButton}--name`} key={choosenButton}>{choosenButton}</div>
                        <div>{pokemonData.weight}kg</div>
                    </>
                )
            case 'height':
                return (
                    <>
                        <div className={`pokedex__${choosenButton}--name`} key={choosenButton}>{choosenButton}</div>
                        <div>{pokemonData.height/10}m</div>
                    </>
                )
            case 'abilities':
                return (
                    <>
                        <div className={`pokedex__${choosenButton}--name`}>{choosenButton}</div>
                        {pokemonData.abilities.map((element,index) => <div key={index}>{element.ability.name}</div>)}
                    </>
                )
            case 'types':
                return (
                    <>
                        <div className={`pokedex__${choosenButton}--name`}>{choosenButton}</div>
                        {pokemonData.types.map((element,index) => <div key={index} className={`pokedex__${choosenButton}--${element.type.name}`}>{element.type.name}</div>)}
                    </>)
            default:
    }
}

export default PokemonConsoleOption