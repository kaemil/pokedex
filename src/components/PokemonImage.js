import React from 'react';

// Component for image and image

function PokemonImage ({pokemonID}){
    const imgID = (id)=>{
        if(id < 10) {
            id = '00' + id;
        } else if(id < 100) {
            id= "0" + id;
        }
        return id
    }
    

        return(
            <div className='pokedex__image pokedex__image--frame'>
            <div className='pokedex__image--inside' key={pokemonID}>
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgID(pokemonID)}.png`}
                alt="asd" copyright="asdasd" ></img>
            </div>
            </div>
        )
}


export default PokemonImage