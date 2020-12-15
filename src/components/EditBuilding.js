import React, { Component } from 'react';
import '../css/EditBuilding.css'

class EditBuilding extends Component {

  state = {
    name: '',
    address: '',
    company: '',
    boilers: ['','',''],
    id: 1
  };

  getBuilding = (e) => {
    const building = this.props.searchBuilding(e.target.value)
    if(this.props.searchBuilding(e.target.value)){
      this.setState({
        id : e.target.value,
        ...building,
        boiler1: building.boilers[0],
        boiler2: building.boilers[1],
        boiler3: building.boilers[2],
      });
    } else {
      this.setState({
        id : e.target.value,
        name : 'Not Found',
        address : 'Not Found',
        company : 'Not Found',
        boiler1 : 'Not Found',
        boiler2 : 'Not Found',
        boiler3 : 'Not Found',
      })
    }
  }

  changeValue = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  submitUpdate = (e) => {
    e.preventDefault();
    const updatedBuilding = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      company: this.state.company,
      boilers: [this.state.boiler1, this.state.boiler2, this.state.boiler3]
    }
    this.props.updateBuilding(updatedBuilding);
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <h2>Update building panel</h2>
        <form className="edit-form" onSubmit={this.submitUpdate}>
          <div className="chosing-container">
            <label>Id:</label>
            <input type="number" min="1" max={this.props.max} onChange={this.getBuilding}/>
          </div>
          <div className="inputs-container">
            <div className="form-group">
              <label for="name" >Building Name:</label>
              <input value={this.state.name || ''} name="edit-name" id="name" type="text" required onChange={this.changeValue} />
            </div>
            <div className="form-group">
              <label for="address" >Building Address:</label>
              <input value={this.state.address || ''} name="edit-address" id="address" type="text" required onChange={this.changeValue} />
            </div>
            <div className="form-group">
              <label for="company" >Building Company:</label>
              <input value={this.state.company || ''} name="edit-company" id="company"  type="text" onChange={this.changeValue} />
            </div>
            <div className="form-group">
              <label for="boiler1" >Building Boiler 1:</label>
              <input value={this.state.boiler1 || ''}  name="edit-boiler1" id="boiler1" type="text" required onChange={this.changeValue} />
            </div>
            <div className="form-group">
              <label for="boiler2" >Building Boiler 2:</label>
              <input value={this.state.boiler2 || ''} name="edit-boiler2" id="boiler2" type="text" onChange={this.changeValue} />
            </div>
            <div className="form-group">
              <label for="boiler3" >Building Boiler 3:</label>
              <input value={this.state.boiler3 || ''} name="edit-boiler3" id="boiler3" type="text" onChange={this.changeValue} />
            </div>
          </div>
            <input type="submit" value="Update" />
        </form>
      </div>
    )
  }
}

export default EditBuilding;
