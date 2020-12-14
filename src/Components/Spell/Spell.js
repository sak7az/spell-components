import React from 'react'; 

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
                <button className='medTxt  spell' id='selectedSpell' onClick={this.handleClick}>{this.props.name}</button>
            )
        }
        return(
            <button className='medTxt  spell' onClick={this.handleClick}>{this.props.name}</button>
        )
    }
}

export default Spell;