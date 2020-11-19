import React, { Component } from 'react';
import './App.css';
import SpellFinder from './Components/SpellFinder/SpellFinder';
import ComponentDisplay from './Components/ComponentsDisplay/ComponentsDisplay';
import Dnd5e from './util/dnd5e';


class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="App">
        <header>Does that spell take components to cast?</header>
        <SpellFinder />
      </div>
    );
  }
}
  
  


export default App;
