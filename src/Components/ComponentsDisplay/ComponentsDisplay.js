import React from 'react';
import './ComponentsDisplay.css';
import ComponentList from '../ComponentList/ComponentList';
import Message from '../Message/Message';

class ComponentsDisplay extends React.Component{
    constructor(props){
        super(props);
    }

    //make api call with this.props.spell object info
    getSpellObject(){
        
    }
    //use results to display the list of components returned 



    render(){
        return(
            <div id='ComponentDisplay'>

                <ComponentList></ComponentList>
            </div>
        )
    }
}

export default ComponentsDisplay;