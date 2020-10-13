import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Results from '../Results/Results';
import Dnd5e from '../../util/dnd5e';
import './SpellFinders.css';

class SpellFinder extends React.Component{

    render(){

        return(
            <div id='SpellFinder'>
                <SearchBar></SearchBar>
                <Results></Results>
            </div>
        )
    }
}

export default SpellFinder;