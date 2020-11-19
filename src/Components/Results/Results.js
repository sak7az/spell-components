import React from 'react';
import ComponentList from '../ComponentList/ComponentList';
import Spell from '../Spell/Spell';
import './Results.css';

class Results extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.resultsIn === true){
            return(
                <div>
                    <ul>
                        {this.props.searchResults.map(spell =>(
                            <Spell spell={spell} name={spell.name} key={spell.name} url={spell.url}></Spell>
                        ))}
                    </ul>
                    <ComponentList />
                </div>
                
            )
        } else if (this.props.resultsIn === false){
            return(
                <h1>No results found</h1>
            )  
        }
    }
}

export default Results;