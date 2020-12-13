import React, { Component } from 'react'
import BuildingItem from './BuildingItem';

class Buildings extends Component {
  render() {
    return (
      <div>
        {this.props.buildings.map(building => <BuildingItem deleteBuilding={this.props.deleteBuilding} key={building.id} building={building}/>)}
      </div>
    )
  }
}

export default Buildings;
