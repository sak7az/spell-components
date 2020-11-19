import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        }

    handleSubmit(event){
        event.preventDefault();
    }

    handleTermChange(event){
        this.setState({term : event.target.value})
    }

    handleKeyUp(event){
        if (event.keyCode === 13) {
            this.search();
        }
    }

    search(){
        if (this.state.term){
           this.props.onSearch(this.state.term);     
        }
    }

    render(){
        return(
            <form className="SearchBar" onSubmit={this.handleSubmit}> 
                <input type="text" id="SearchTerm" placeholder="What's the name of the spell?" onChange={this.handleTermChange} onKeyUp={this.handleKeyUp}></input>
                <button 
                    type="button" 
                    onClick={this.search}
                    
                    >Search</button>
            </form>
        );
    }

}

export default SearchBar;