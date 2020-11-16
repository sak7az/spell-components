import React from 'react';
import './App.css';
import SpellFinder from './Components/SpellFinder/SpellFinder';
import ComponentDisplay from './Components/ComponentsDisplay/ComponentsDisplay';
import Dnd5e from './util/dnd5e';

function App() {
  const promise =Dnd5e.searchSpells('guiding bolt');
  promise.then( promise => {
  console.log(promise);
  });
  return (
    <div className="App">
      <header>Does that spell take components to cast?</header>
      <SpellFinder />
      <ComponentDisplay />
    </div>
  );
}

export default App;
