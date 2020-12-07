import React from 'react';
import './ResultsMessage.css';

class ResultsMessage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let response = (
            <div></div>
        );
        if (this.props.resultsNotFound){
            response = (
                <p className='results'>Looks like there are no spells in this database matching your search.</p>
            );
        }
        return response;
    }
}

export default ResultsMessage;
