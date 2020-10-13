import React from 'react';
import Spell from '../Spell/Spell';
import './Results.css';

class Results extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <Spell></Spell>
                </li>
            </ul>
        )
    }
}

export default Results;