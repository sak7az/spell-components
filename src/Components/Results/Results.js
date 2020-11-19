import React from 'react';
import Spell from '../Spell/Spell';
import './Results.css';

class Results extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul>
                {this.props.searchResults.map(spell =>(
                    <Spell spell={spell} name={spell.name} key={spell.name} url={spell.url}></Spell>
                ))}
            </ul>
        )
    }
}

export default Results;