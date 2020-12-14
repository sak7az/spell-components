import React from 'react';
import ResultsMessage from '../ResultsMessage/ResultsMessage';
import ComponentsDisplay from '../ComponentsDisplay/ComponentsDisplay';

class Results extends React.Component{

    render(){
        return(
            <div>
                <ResultsMessage resultsNotFound={this.props.noResults}/>
                <ComponentsDisplay 
                    selectionMade={this.props.selectionMade} 
                    materialComponents={this.props.materialComponents}
                />
            </div>
        )
    }
}

export default Results;