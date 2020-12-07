import React, { Component } from 'react';
import './App.css';
import SpellFinder from './Components/SpellFinder/SpellFinder';


class App extends Component {

  render(){
    return (
      <div className="App">
        <header>Does my spell take components to cast?</header>
        <SpellFinder />
      </div>
    );
  }
}
  
  


export default App;
