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
                <p>materials found</p>
            </div>
        )

        const spellDisplayNoComponents =(
            <div>

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