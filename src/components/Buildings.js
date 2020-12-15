import React, { Component } from 'react'
import BuildingItem from './BuildingItem';
import '../css/Buildings.css';

class Buildings extends Component {
  render() {
    return (
      <div>
        <div className="headers-container">
          <div className="header" >NAME</div>
          <div className="header" >ADDRESS</div>
          <div className="header" >BOILERS</div>
          <div className="header" >COMPANY</div>
          <div className="header" >ID</div>
          <div>DELETE</div>
        </div>
        {this.props.buildings.map(building => <BuildingItem deleteBuilding={this.props.deleteBuilding} key={building.id} building={building}/>)}
      </div>
    )
  }
}

export default Buildings;
