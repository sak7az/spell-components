import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
    }

    handleTermChange(event){
        this.setState({term : event.target.value})
    }

    search(){
        if (this.state.term){
           this.props.onSearch(this.state.term);     
        }
    }

    render(){
        return(
            <form className="SearchBar"> 
                <input type="text" id="SearchTerm" placeholder="What's the name of the spell?" onChange={this.handleTermChange}></input>
                <button type="button" onClick={this.search}>Search</button>
            </form>
        );
    }

}

export default SearchBar;