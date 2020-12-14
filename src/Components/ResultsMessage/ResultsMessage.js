import React from 'react';

class ResultsMessage extends React.Component {

    render(){
        let response = (
            <div></div>
        );
        if (this.props.resultsNotFound){
            response = (
                <p className='largeTxt  results'>Looks like there are no spells in this database matching your search.</p>
            );
        }
        return response;
    }
}

export default ResultsMessage;
