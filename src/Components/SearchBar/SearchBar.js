import React from 'react';
import ClearButton from '../ClearButton/ClearButton';

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
        if (this.state.term && this.state.term.length >= 2){
           this.props.onSearch(this.state.term);     
        }
    }

    render(){
        return(
            <form className="SearchBar" onSubmit={this.handleSubmit}> 
                <input 
                    className='largeTxt'
                    type="text" id="SearchTerm" 
                    placeholder="Search spells by name..." 
                    onChange={this.handleTermChange} 
                    onKeyUp={this.handleKeyUp}>

                </input>
                <br></br>
                <button 
                    className='largeTxt  button'
                    onClick={this.search}>
                        Search
                </button>
                <ClearButton />
            </form>
        );
    }

}

export default SearchBar;