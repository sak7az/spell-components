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
            searchResults: [],
        }
    }
    

    search(term){
        const promise = Dnd5e.searchSpells(term);
        promise.then( promise => {
            this.setState({searchResults: promise.results});
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

    render(){
        return(
            <div id='SpellFinder'>
                <SearchBar onSearch={this.search}></SearchBar>
                <Results 
                    searchResults={this.state.searchResults} 
                    noResults={this.state.noResults}
                ></Results>
            </div>
        )
    }
}

export default SpellFinder;