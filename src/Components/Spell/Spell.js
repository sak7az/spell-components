import React from 'react'; 
import './Spell.css';

class Spell extends React.Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        this.props.onClick(this.props.spell)
    }
    
    render(){
        return(
            <React.Fragment >
                <button className='spell' onClick={this.handleClick}>{this.props.name}</button>
            </React.Fragment>
        )
    }
}

export default Spell;