import React from 'react'; 
import './Spell.css';

class Spell extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <React.Fragment>
                <img></img>
                <p>Spell Name</p>
            </React.Fragment>
        )
    }
}

export default Spell;