import React from 'react';

// ID switcher

function PokemonSwitch ({idCountDown,idCountUp}){
    return(
        <div className='pokedex__switch'>
            <div className='pokedex__switchID'>
            </div>
            <div className='pokedex__switchButton'>
            <button 
            onKeyDown={idCountDown}
                name="previous"
                className='pokedex__switchButton--arrow' 
                onClick={idCountDown}
                ><i className="fas fa-chevron-left"></i>-</button>
            <button 
            onKeyDown={idCountUp}
            name="next"
            className='pokedex__switchButton--arrow' 
            onClick={idCountUp}
            ><i className="fas fa-chevron-right"></i>+</button>
            </div>
        </div>
    )
}

export default PokemonSwitch