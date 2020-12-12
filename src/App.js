import React, { Component } from 'react';
import buildings from './mocks/buildings.json';
import Header from './components/Header'
import Buildings from './components/Buildings';

class App extends Component {
  state = {buildings}

  render() {
    return (
      <div>
        <Header/>
        <Buildings buildings={this.state.buildings}/>
      </div>
    )
  }
}

export default App;