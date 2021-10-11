import React from 'react';
import './css/style.css';
import './fontawesome/css/all.min.css'
import PokemonImage from './components/PokemonImage'
import PokemonSwitch from './components/PokemonSwitch'
import PokemonConsoleButton from './components/PokemonConsoleButton'
import PokemonConsole from './components/PokemonConsole'

export default class PokemonContainer extends React.Component{
  constructor(props) {
      super(props);
          this.state = {id: this.props.pokemoneList[0].id,
                      buttonvalue: this.props.buttonsNames[0]}
          this.idChange = this.idChange.bind(this)
          this.handleChange=this.handleChange.bind(this)
  }

  handleChange(buttonname){
      this.setState({buttonvalue: buttonname})
  }

  idChange(idString){
      this.setState({id: idString})
  }

  render(){
    return(
      <div className='pokedex'>
        <div className='pokedex__leftcard'>
          <PokemonImage id={this.state.id}/>
          <PokemonSwitch id={this.state.id} onIdChange={this.idChange}/>
        </div>
        <div className='pokedex__middle'></div>
        <div className='pokedex__rightcard'>              
            <PokemonConsole 
            pokemoneList={this.props.pokemoneList} 
            id={this.state.id}
            buttonvalue={this.state.buttonvalue}   
            />
            <PokemonConsoleButton 
            buttonsNames={this.props.buttonsNames}
            onHandleChange={this.handleChange}
            />
        </div>
      </div>
    )
  }
}


