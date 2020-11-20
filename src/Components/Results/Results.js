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
        console.log('selectionGetter');
        console.log(this.state.selection);
    }

    render(){
        if (this.props.resultsIn === true){
            return(
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
                    <ComponentsDisplay spell={this.selection}/>
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