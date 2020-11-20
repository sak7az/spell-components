import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Spell from '../Spell/Spell';
import ComponentsDisplay from '../ComponentsDisplay/ComponentsDisplay'
import Dnd5e from '../../util/dnd5e';
import './SpellFinders.css';

class SpellFinder extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
        this.selectionGetter = this.selectionGetter.bind(this);
        this.getSpellObject = this.getSpellObject.bind(this);
        this.state = {
            searchResults: [],
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
        this.getSpellObject();
    }

    getSpellObject(){
        const promise = Dnd5e.retrieveSpell(this.state.selection);
        promise.then( promise =>{
            if(promise){
                this.setState({
                    selectedSpell: promise,
                    selectionMade: true
                });
            }
        })
    }

    componentsDisplaySwitcher(selectionMade){
        if (selectionMade) {
            return (
                <ComponentsDisplay 
                    materialComponents={this.state.selectedSpell.material}
                />
            )
        }
    }



    render(){
        return(
            <div id='SpellFinder'>
                <SearchBar onSearch={this.search}></SearchBar>
                <ul>
                    {this.state.searchResults.map(spell =>(
                        <Spell 
                            spell={spell} 
                            name={spell.name} 
                            key={spell.name} 
                            url={spell.url}
                            onClick={this.selectionGetter}
                        ></Spell>
                    ))}
                </ul>
                {this.componentsDisplaySwitcher(this.state.selectionMade)}
            </div>
        )
    }
}

export default SpellFinder;