import React from 'react';
import ClearButton from '../ClearButton/ClearButton';
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
                    <p className='largeTxt  results'>You're gonna need... </p>
                    <p className='largeTxt  results'>{this.props.materialComponents}</p>
                </div>
            )
        } else {
            return(
                <div>
                    <p className='largeTxt  results'>Looks like you're good to go! This spell doesn't require material components.</p>
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