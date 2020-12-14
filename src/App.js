import React, { Component } from 'react';
import './App.css';
import SpellFinder from './Components/SpellFinder/SpellFinder';
import Results from './Components/Results/Results';


class App extends Component {
  constructor(props){
    super(props);
    this.passNoResults = this.passNoResults.bind(this);
    this.passSelectionMade = this.passSelectionMade.bind(this);
    this.passMaterialComponents = this.passMaterialComponents.bind(this);
    this.state = {
      selectionMade: false,
    }
  }

  passNoResults(noResults){
    this.setState({
      resultsNotFound: noResults
    })
  }

  passSelectionMade(selectionMade){
    this.setState({
      selectionMade: selectionMade
    })
  }

  passMaterialComponents(materialComponents){
    this.setState({
      materialComponents : materialComponents
    })
  }

  render(){
    return (
      <div className="App">
        <SpellFinder 
          passNoResults={this.passNoResults}
          passSelectionMade={this.passSelectionMade}
          passMaterialComponents={this.passMaterialComponents}
        />
        <Results 
          resultsNotFound={this.state.noResults}
          selectionMade={this.state.selectionMade}
          materialComponents={this.state.materialComponents}
        />
      </div>
    );
  }
}
  
  


export default App;
