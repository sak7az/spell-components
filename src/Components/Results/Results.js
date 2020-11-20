import React from 'react';
import ComponentsDisplay from '../ComponentsDisplay/ComponentsDisplay';
import Spell from '../Spell/Spell';
import './Results.css';

class Results extends React.Component{
    constructor(props){
        super(props);
        this.selectionGetter = this.selectionGetter.bind(this)
        this.state = {
            selection : ''
        }
    }

    selectionGetter = (spell) => {
        this.setState({
            selection: spell
        });
    }

    render(){

        const results = (
            <div>
                    <ul>
                        {this.props.searchResults.map(spell =>(
                            <Spell 
                                spell={spell} 
                                name={spell.name} 
                                key={spell.name} 
                                url={spell.url}
                                onClick={this.selectionGetter}
                            ></Spell>
                        ))}
                    </ul>
                    <ComponentsDisplay spell={this.state.selection}/>
                </div>
        )

        if (this.props.resultsIn === true){
            return results;
        } else if (this.props.resultsIn === false){
            return(
                <h1>No results found</h1>
            )  
        }
    }
}

export default Results;