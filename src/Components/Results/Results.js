import React from 'react';
import ComponentsDisplay from '../ComponentsDisplay/ComponentsDisplay';
import Spell from '../Spell/Spell';
import './Results.css';
import Dnd5e from '../../util/dnd5e';

class Results extends React.Component{
    constructor(props){
        super(props);
        this.selectionGetter = this.selectionGetter.bind(this);
        this.getSpellObject = this.getSpellObject.bind(this);
        this.state = {
            selection : '',
            searchCalled: false
        }
    }

    selectionGetter = (spell) => {
        this.setState({
            selection: spell
        });
        this.getSpellObject();
    }

    getSpellObject(){
        const promise = Dnd5e.retrieveSpell(this.state.selection);
        promise.then( promise =>{
            if(promise){
                this.setState({
                    materialComponents: promise.material,
                    searchCalled: true
                });
            }
        })
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
            </div>
        );
        const resultsWithSelection =(
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
                <ComponentsDisplay 
                    spell={this.state.selection} 
                    materialComponents={this.state.materialComponents}
                    searchCalled={this.state.searchCalled}
                />
            </div>
            
        );

        if (this.props.resultsIn && this.state.selection === ''){
            return results;
        } else if (this.props.resultsIn){
            return resultsWithSelection;
        }   
        else{
            return(
                <h1>No results found</h1>
            )  
        }
    }
}

export default Results;