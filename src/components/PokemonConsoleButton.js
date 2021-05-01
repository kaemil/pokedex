import React from 'react';

// eslint-disable-next-line
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Console buttons

export default class PokemonConsoleButton extends React.Component{
     constructor(props) {
         super(props);
         this.handleChange = this.handleChange.bind(this)
     }
     handleChange(e){
         this.props.onHandleChange(e.target.value)
     }
     
     render(){
         const rows=[]
         const buttonsNames = this.props.buttonsNames
         buttonsNames.forEach(button => {
             rows.push(<button className='pokedex__buttons--size' id={button} onClick={this.handleChange} key={button} value={button}>{button.capitalize()}</button>)
         });
         return(
             <div className='pokedex__buttons'>
             {rows}
             </div>
         )
     }
   }