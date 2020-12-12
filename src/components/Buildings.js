import React, { Component } from 'react'
import BuildingItem from './BuildingItem';

class Buildings extends Component {
  render() {
    return (
      <div>
        <table style={{textAlign: 'right'}}>
          <caption>Buildings Records</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Building Name</th>
              <th>Building Address</th>
              <th>Boilers</th>
              <th>Company</th>
            </tr>
          </thead>
        <tbody>
          {this.props.buildings.map(building => <BuildingItem key={building.id} building={building}/>)}
        </tbody>
        </table>
      </div>
    )
  }
}

export default Buildings;
