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

            </div>
        )

        const spellDisplayNoComponents =(
            <div>

            </div>
        )


        return spellDisplayWithComponents;
    }
}

export default ComponentsDisplay;