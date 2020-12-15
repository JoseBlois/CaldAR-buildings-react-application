import React, { Component } from 'react';
import buildings from './mocks/buildings.json';
import Header from './components/Header'
import Buildings from './components/Buildings';
import AddBuilding from './components/AddBuilding';
import EditBuilding from './components/EditBuilding';
import './App.css';

class App extends Component {
  state = {
    buildings,
    max : 20,
  }

  deleteBuilding = (id) => {
    this.setState({
      buildings: [...this.state.buildings.filter(building => building.id !== id)]
    });
  }

  addBuilding = (building) => {
    building.id = this.state.buildings[this.state.buildings.length - 1].id + 1;
    this.setState({
      buildings: [...this.state.buildings, building],
      max: this.state.max + 1
    })
  }

  updateBuilding = (updatedBuilding) => {
    console.log(updatedBuilding);
    const updatedBuildings = this.state.buildings;
    const index = updatedBuildings.findIndex(oldBuilding => oldBuilding.id === updatedBuilding.id );
    updatedBuildings[index] = updatedBuilding;
    this.setState({
      buildings: updatedBuildings
    });
  }

  searchBuilding = (id) => this.state.buildings.find(building => parseInt(building.id) === parseInt(id));

  render() {
    return (
      <div className="container">
        <Header/>
        <AddBuilding addBuilding={this.addBuilding}/>
        <EditBuilding max={this.state.max} searchBuilding={this.searchBuilding} updateBuilding={this.updateBuilding}  />
        <Buildings deleteBuilding={this.deleteBuilding} buildings={this.state.buildings}/>
      </div>
    )
  }
}

export default App;