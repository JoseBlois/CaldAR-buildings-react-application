import React, { Component } from 'react'

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px',
  backgroundColor: '#888',
  boderBottom: 'solid 1px black',
  marginBottom: '5px',
  fontFamily: 'Open-sans',
  fontWeight: '700',
  textAling: 'right',
}
const celStyle = {
  flex: 2,
}

const deleteBtnStyle = {
  padding: '15px 20px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#f00',
  color: 'white',
  cursor: 'pointer',
}

class BuildingItem extends Component {
  render() {
    return (
        <div style={rowStyle}>
          <div style={celStyle}>{this.props.building.name}</div>
          <div style={celStyle}>{this.props.building.address}</div>
          <div style={celStyle}>[{this.props.building.boilers.join('-')}]</div>
          <div style={celStyle}>{this.props.building.company}</div>
          <div style={celStyle}>{this.props.building.id}</div>
          <button>Edit</button>
          <button style={deleteBtnStyle} onClick={this.props.deleteBuilding.bind(this, this.props.building.id)} >X</button>
        </div>
    )
  }
}

export default BuildingItem;