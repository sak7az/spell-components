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
        if (this.props.spell === this.props.selection){
            return(
                <button className='spell' id='selectedSpell' onClick={this.handleClick}>{this.props.name}</button>
            )
        }
        return(
            <button className='spell' onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}

export default Spell;