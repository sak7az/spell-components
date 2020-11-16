import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import Dnd5e from '../../util/dnd5e';
import './SpellFinders.css';

class SpellFinder extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);

        this.state = {
            searchResults: []
        }
    }
    

    search(term){
        Dnd5e.searchSpells(term).then( promise =>{
            this.setState({ searchResults: promise.results});
        });
    }

    render(){
        
        return(
            <div id='SpellFinder'>
                <SearchBar onSearch={this.search}></SearchBar>
                <Results searchResults={this.state.searchResults}></Results>
            </div>
        )
    }
}

export default SpellFinder;