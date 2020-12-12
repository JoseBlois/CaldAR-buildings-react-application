import React, { Component } from 'react'

class BuildingItem extends Component {
  render() {
    return (
      <tr style={{height: '40px'}}>
        <td>{this.props.building.id}</td>
        <td>{this.props.building.name}</td>
        <td>{this.props.building.address}</td>
        <td>[{this.props.building.boilers.join('-')}]</td>
        <td>{this.props.building.company}</td>
      </tr>
    )
  }
}

export default BuildingItem;