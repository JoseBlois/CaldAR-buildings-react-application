import React, { Component } from 'react'
import '../css/BuildingItem.css'

class BuildingItem extends Component {
  render() {
    return (
        <div className="row">
          <div>{this.props.building.name}</div>
          <div>{this.props.building.address}</div>
          <div>[{this.props.building.boilers.join('-')}]</div>
          <div>{this.props.building.company}</div>
          <div>{this.props.building.id}</div>
          <button className="delete-btn" onClick={this.props.deleteBuilding.bind(this, this.props.building.id)} >X</button>
        </div>
    )
  }
}

export default BuildingItem;