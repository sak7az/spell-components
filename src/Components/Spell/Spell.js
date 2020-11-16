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
                <p>{this.props.name}</p>
            </React.Fragment>
        )
    }
}

export default Spell;