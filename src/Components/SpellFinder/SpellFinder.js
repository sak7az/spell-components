import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Spell from '../Spell/Spell';
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
        }
    }
    
    search(term){
        const promise = Dnd5e.searchSpells(term);
        promise.then( promise => {
            this.setState({
                searchResults: promise.results,
            });
            this.props.passSelectionMade(false);
            if (this.state.searchResults.length === 0) { 
                this.props.passNoResults(true);
            }
            else {
                this.props.passNoResults(false);
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
                });
                this.props.passMaterialComponents(promise.material);
                this.props.passSelectionMade(true);
            }
        })
    }

    render(){
        return(
            <div id='SpellFinder'>
                <header className='largeTxt'>Does my spell take components to cast?</header>
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
            </div>
        )
    }
}

export default SpellFinder;