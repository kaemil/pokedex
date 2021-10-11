import React from 'react';

// Console buttons

function PokemonConsoleButton ({handleButton}){
    const buttonsNames=['Name','Abilities','Height','Weight','Stats','Types','Evolution']
    const buttons = buttonsNames.map((button,index) =>
        <button 
        className='pokedex__buttons--size' 
        onClick={()=>handleButton(button)}
        key={index}>
        {button}
        </button>
        )
    return(
        <div className='pokedex__buttons'>
            {buttons}
        </div>
    )

}

export default PokemonConsoleButton
   
   
