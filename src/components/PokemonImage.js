import React from 'react';

// Component for image and image

export default class PokemonImage extends React.Component{
     render(){
        const id = this.props.id
        let pokImg = []
        for(let i = 1; i < 152; i++) {
            let x = Math.floor(Math.random() * 11) + 1
            if(x < 10) {
                x = '00' + x;
            } else if(x < 100) {
                x = "0" + x;
            }
                  
            pokImg.push(`img/${x}.jpg`)
            console.log(pokImg)  
        }
         return(
             <div className='pokedex__image pokedex__image--frame'>
                <div className='pokedex__image--inside' key={pokImg[id-1]}>
                    <img src={pokImg[id-1]} alt="asd" copyright="asdasd" ></img>
                </div>
             </div>
         )
     }
   }