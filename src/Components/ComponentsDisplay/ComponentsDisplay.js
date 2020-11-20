import React from 'react';
import './ComponentsDisplay.css';
import ComponentList from '../ComponentList/ComponentList';
import Dnd5e from '../../util/dnd5e';

class ComponentsDisplay extends React.Component{
    constructor(props){
        super(props);
    }

    //make api call with this.props.spell object info
    getSpellObject(){
        const promise = Dnd5e.retrieveSpell(this.props.spell);
        promise.then( promise =>{
            console.log(promise);
        })
    }
    //use results to display the list of components returned 



    render(){
        this.getSpellObject();

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