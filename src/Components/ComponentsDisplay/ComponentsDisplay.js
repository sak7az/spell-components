import React from 'react';
import './ComponentsDisplay.css';
import ComponentList from '../ComponentList/ComponentList';

class ComponentsDisplay extends React.Component{
    constructor(props){
        super(props);
        
    }


    render(){
        const spellDisplayWithComponents =(
            <div>
                <p>You're gonna need... </p>
                <p>{this.props.materialComponents}</p>
            </div>
        )

        const spellDisplayNoComponents =(
            <div>
                <p>Looks like you're good to go! This spell doesn't require material components.</p>
            </div>
        )


        if (this.props.materialComponents){
            return spellDisplayWithComponents;
        } else {
            return spellDisplayNoComponents;
        }
    }
}

export default ComponentsDisplay;