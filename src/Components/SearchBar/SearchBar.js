import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.state = {term: ''}
    }

    handleTermChange(event){
        this.setState({term : event.target.value})
    }

    render(){
        return(
            <form className="SearchBar"> 
                <input type="text" id="SearchTerm" placeholder="What's the name of the spell?" onChange={this.handleTermChange}></input>
                <button type="submit">Search</button>
            </form>
        );
    }

}

export default SearchBar;