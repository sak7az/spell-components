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
                <p>Looks like you're good to go! This spell doesn't require material components.</p>
            </div>
        )

        const emptyDiv =(
            <div></div>
        )


        if (this.props.materialComponents && this.props.searchCalled){
            return spellDisplayWithComponents;
        } else if (this.props.searchCalled) {
            return spellDisplayNoComponents;
        } else {
            return emptyDiv;
        }
    }
}

export default ComponentsDisplay;