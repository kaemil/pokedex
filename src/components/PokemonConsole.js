import React from 'react';
import RadarChart from './Radar'


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

//Component to render data

export default class PokemonConsole extends React.Component{    
    render(){
        const screen =[];
        let idString=''
        const id = this.props.id
        const buttonvalue = this.props.buttonvalue;
        const pokemoneList = this.props.pokemoneList;
        const pokemoneStats = pokemoneList[id-1].stats
        const type = pokemoneList[id-1].type
        const weaknesses = pokemoneList[id-1].weaknesses
        const abilities = pokemoneList[id-1].abilities
        const evolution = pokemoneList[id-1].evolution
        if(id<10){
            idString='00' + id
        } else if (id<100)
            idString='0' + id
        else idString = id.toString()

        if (buttonvalue === 'name'){
            screen.push(
                <React.Fragment>
                    <div className={'pokedex__'+buttonvalue+'--name'} key={buttonvalue}>{pokemoneList[id-1].name}</div>
                    <div key={idString}>#{idString}</div>
                </React.Fragment>
            )
        }else if(buttonvalue === 'stats'){
            screen.push(
                <RadarChart key='chart' pokemoneStats={pokemoneStats}/>
            )
        }else if(buttonvalue === 'weight'){
            screen.push(
            <React.Fragment>
                <div className={'pokedex__'+buttonvalue+'--name'} key={buttonvalue}>{buttonvalue.capitalize()}</div>
                <div>{pokemoneList[id-1].weight}kg</div>
            </React.Fragment>  
            )
        }else if(buttonvalue === 'height'){
            screen.push(
                <React.Fragment>
                    <div className={'pokedex__'+buttonvalue+'--name'} key={buttonvalue}>{buttonvalue.capitalize()}</div>
                    <div>{pokemoneList[id-1].height}m</div>
                </React.Fragment>
            )
        }else if(buttonvalue === 'category'){
            screen.push(
                <React.Fragment>
                    <div className={'pokedex__'+buttonvalue+'--name'} key={buttonvalue}>{buttonvalue.capitalize()}</div>
                    <div>{pokemoneList[id-1].category}</div>
                </React.Fragment>
            )
        }else if(buttonvalue === 'abilities'){
            screen.push(<div className={'pokedex__'+buttonvalue+'--name'}>{buttonvalue.capitalize()}</div>)
            abilities.forEach(block => {
                if (block !== '')
                    screen.push(
                        <React.Fragment>
                            <div key={block} id={block}>
                                {block}
                            </div>
                        </React.Fragment>
                )
            })
        }else if(buttonvalue === 'type'){
            screen.push(<div className={'pokedex__'+buttonvalue+'--name'}>{buttonvalue.capitalize()}</div>)
            const check = []
            type.forEach(block => {
                const classType = block + ' pokedex__type--element';
                    if (block !== ''){
                        check.push(
                                <div key={block} className={classType}>
                                    {block}
                                </div>
                        )
                    }   
                }
            )
            screen.push(<div className='pokedex__type--size'>{check}</div>)
        }else if(buttonvalue === 'weaknesses'){
            screen.push(<div className={'pokedex__'+buttonvalue+'--name'}>{buttonvalue.capitalize()}</div>)
            const check = []
            weaknesses.forEach(block => {
                const classType = block + ' pokedex__type--element';
                    if (block !== ''){
                        check.push(
                                <div key={block} className={classType}>
                                    {block}
                                </div>
                        )
                    }   
                }
            )
            screen.push(<div className='pokedex__type--size'>{check}</div>)
        } else if(buttonvalue === 'evolution'){
            const pokemonNameArray=[]
            for(let i =1;i<152; i++){
                pokemonNameArray.push(pokemoneList[i-1].name)
            }
            evolution.forEach(block => {
                if (block !== '')
                pokemonNameArray.forEach( name =>{
                    if(name === block){
                        let number = pokemonNameArray.indexOf(block)+1
                        if (number<10){
                            number = '00' + number
                        } else if (number <100){
                            number = '0' + number
                        }
                        screen.push(
                            <div key={block} className={block}>
                                #{number} {block.capitalize()}
                            </div>)
                    }
                })
            })
        }
        return(
           <div className="pokedex__screen">
                <div className={'pokedex__'+buttonvalue}> 
                    {screen}
                </div>
           </div>
       )
   }
}