import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Spell from '../Spell/Spell';
import ComponentsDisplay from '../ComponentsDisplay/ComponentsDisplay';
import ResultsMessage from '../ResultsMessage/ResultsMessage';
import Dnd5e from '../../util/dnd5e';
import './SpellFinder.css';

class SpellFinder extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.selectionGetter = this.selectionGetter.bind(this);
        this.getSpellObject = this.getSpellObject.bind(this);
        this.state = {
            searchResults: [],
            selectionMade: false
        }
    }
    
    search(term){
        const promise = Dnd5e.searchSpells(term);
        promise.then( promise => {
            this.setState({
                searchResults: promise.results,
                selectionMade: false
            });
            if (this.state.searchResults.length === 0) { 
                this.setState({
                    noResults: true,
                })
            }
            else {
                this.setState({
                    noResults: false,
                })
            }
        });
    }

    selectionGetter = (spell) => {
        this.setState({
            selection: spell
        });
        this.getSpellObject(spell);
    }

    getSpellObject(spell){
        const promise = Dnd5e.retrieveSpell(spell);
        promise.then( promise =>{
            if(promise){
                this.setState({
                    selectedSpell: promise,
                    materialComponents : promise.material,
                    selectionMade: true
                });
            }
        })
    }

    render(){
        return(
            <div id='SpellFinder'>
                <SearchBar onSearch={this.search}></SearchBar>
                <div id='spells'>
                {this.state.searchResults.map(spell =>(
                    <Spell 
                        spell={spell} 
                        name={spell.name} 
                        key={spell.name} 
                        url={spell.url}
                        selection={this.state.selection}
                        onClick={this.selectionGetter}
                    ></Spell>
                ))}
                </div>
                <ResultsMessage resultsNotFound={this.state.noResults}/>
                <ComponentsDisplay 
                    selectionMade={this.state.selectionMade} 
                    materialComponents={this.state.materialComponents}
                />
            </div>
        )
    }
}

export default SpellFinder;