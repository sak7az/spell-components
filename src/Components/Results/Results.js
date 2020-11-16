import React from 'react';
import Spell from '../Spell/Spell';
import './Results.css';

class Results extends React.Component{
    constructor(props){
        super(props);
    }

    //prop: search results

    render(){
        return(
            <ul>
                {this.props.searchResults.map(spell =>(
                    <Spell spell={spell} name={spell.name} url={spell.url}></Spell>
                ))}
            </ul>
        )
    }
}

export default Results;