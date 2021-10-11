import React from 'react';

// Component for console buttons

export default class ConsoleComponent extends React.Component{
     render(){
          const block = this.props.block
          const buttonvalue = this.props.buttonvalue
          return(
               <div className={'pokedex__'+buttonvalue}> 
               <div key={block} className={block}>
                   {block}
               </div>
               </div>
           )
     }
}