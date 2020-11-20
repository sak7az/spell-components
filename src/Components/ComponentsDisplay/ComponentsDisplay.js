import React from 'react';
import './ComponentsDisplay.css';

class ComponentsDisplay extends React.Component{
    constructor(props){
        super(props);
        this.displayComponents = this.displayComponents.bind(this);
    }

    displayComponents(){
        if (this.props.materialComponents){
            return(
                <div>
                    <p>You're gonna need... </p>
                    <p>{this.props.materialComponents}</p>
                </div>
            )
        } else {
            return(
                <div>
                    <p>Looks like you're good to go! This spell doesn't require material components.</p>
                </div>
            )
        }
    }

    render(){
        let message = (
            <div></div>
        ); 
        if (this.props.selectionMade){
            message = this.displayComponents();
        }
        return message;
    }
}

export default ComponentsDisplay;