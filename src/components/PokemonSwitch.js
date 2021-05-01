    import React from 'react';

// ID switcher

export default class PokemonSwitch extends React.Component{
     constructor(props) {
         super(props);
         this.idCountDown = this.idCountDown.bind(this);
         this.idCountUp = this.idCountUp.bind(this);

     }

     // Event for right and left arrow
     componentDidMount(){
        document.addEventListener('keydown', this.keyLeft)
        document.addEventListener('keydown', this.keyRight)  
     }

     componentWillUnmoun(){
        document.addEventListener('keydown', this.keyLeft)
        document.addEventListener('keydown', this.keyRight)  
     }

     keyLeft = (e) =>{
         if(e.keyCode === 37)
         this.idCountDown()
     }

     keyRight = (e) =>{
        if(e.keyCode === 39)
        this.idCountUp()
    }
     //

    // Event after button mouse click
     idCountDown(){
        var idNumber = this.props.id
        idNumber -= 1
        if (idNumber === 0){
            idNumber = 151
            }
        this.props.onIdChange(idNumber)
         }
    
     idCountUp(){
         var idNumber = this.props.id
         idNumber += 1
         if (idNumber === 152){     
             idNumber = 1}
         this.props.onIdChange(idNumber)
         }

     render(){

        let idString=''
        const id = this.props.id
     if(id<10){
         idString='00' + id
     } else if (id<100)
         idString='0' + id
     else idString = id.toString()
         return(
             <div className='pokedex__switch'>
                 <div className='pokedex__switchID'>
                     #{idString}
                 </div>
                 <div className='pokedex__switchButton'>
                    <button className='pokedex__switchButton--arrow' onClick={this.idCountDown}><i class="fas fa-chevron-left"></i></button>
                    <button className='pokedex__switchButton--arrow' onClick={this.idCountUp}><i class="fas fa-chevron-right"></i></button>
                </div>
             </div>
         )
     }
   }