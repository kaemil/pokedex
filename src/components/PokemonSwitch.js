import React,{useEffect} from 'react';

// ID switcher

function PokemonSwitch ({idCountDown,idCountUp}){
    // Creating eventListeners
    // Making possible for user to use arrow key to change pokemon ID
    useEffect(()=>{
        const keyLeft = (e) =>{
            if(e.keyCode === 37) idCountDown()
        }
    
        const keyRight = (e) =>{
           if(e.keyCode === 39) idCountUp()
       }
        document.addEventListener('keydown',keyLeft)
        document.addEventListener('keydown',keyRight)
        return()=>{
            document.removeEventListener('keydown',keyLeft)
            document.removeEventListener('keydown',keyRight)
        }
    },[idCountDown, idCountUp])

    return(
        <div className='pokedex__switch'>
            <div className='pokedex__switchID'>
            </div>
            <div className='pokedex__switchButton'>
            <button 
                name="previous"
                className='pokedex__switchButton--arrow' 
                onClick={idCountDown}
                ><i className="fas fa-chevron-left"></i>-</button>
            <button 
            name="next"
            className='pokedex__switchButton--arrow' 
            onClick={idCountUp}
            ><i className="fas fa-chevron-right"></i>+</button>
            </div>
        </div>
    )
}

export default PokemonSwitch