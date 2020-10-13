import React from 'react';
import './ComponentsDisplay.css';
import ComponentList from '../ComponentList/ComponentList';
import Message from '../Message/Message';

class ComponentDisplay extends React.Component{

    render(){
        return(
            <div id='ComponentDisplay'>
                <Message></Message>
                <ComponentList></ComponentList>
            </div>
        )
    }
}

export default ComponentList;