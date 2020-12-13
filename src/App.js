import React, { Component } from 'react';
import buildings from './mocks/buildings.json';
import Header from './components/Header'
import Buildings from './components/Buildings';
import AddBuilding from './components/AddBuilding';
import './App.css';

class App extends Component {
  state = {buildings}

  deleteBuilding = (id) => {
    this.setState({
      buildings: [...this.state.buildings.filter(building => building.id !== id)]
    });
  }

  addBuilding = (building) => {
    building.id = this.state.buildings[this.state.buildings.length - 1].id + 1;
    this.setState({
      buildings: [...this.state.buildings, building]
    })
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <AddBuilding addBuilding={this.addBuilding}/>
        <Buildings deleteBuilding={this.deleteBuilding} buildings={this.state.buildings}/>
      </div>
    )
  }
}

export default App;