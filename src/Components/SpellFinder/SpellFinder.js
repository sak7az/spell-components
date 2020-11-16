import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import Dnd5e from '../../util/dnd5e';
import './SpellFinders.css';

class SpellFinder extends React.Component{
    constructor(props){
        console.log('constructor');
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            searchResults: []
        }
    }
    

    search(term){
        console.log('search');
        this.setState({searchResults: ['testResult']});
        // const promise = Dnd5e.searchSpells(term);
        // promise.then( promise => {
        //     this.setState({searchResults: promise.results});
        // });
        
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