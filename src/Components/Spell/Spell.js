import React from 'react'; 
import './Spell.css';

class Spell extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){

    }
    
    render(){
        return(
            <React.Fragment>
                <a onClick={this.handleClick}>{this.props.name}</a>
            </React.Fragment>
        )
    }
}

export default Spell;