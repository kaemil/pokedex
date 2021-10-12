import React,{useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
// ID switcher

function PokemonSwitch ({idCountDown,idCountUp,id}){
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
            <div className='pokedex__switchID'>#{id}</div>
            <div className='pokedex__switchButton'>
            
            
            <button 
                name="previous"
                className='pokedex__switchButton--arrow' 
                onClick={idCountDown}
            ><FontAwesomeIcon icon={faChevronLeft}/></button>
            <div></div>
            <button 
                name="next"
                className='pokedex__switchButton--arrow' 
                onClick={idCountUp}
            ><FontAwesomeIcon icon={faChevronRight}/></button>
            </div>
        </div>
    )
}

export default PokemonSwitch