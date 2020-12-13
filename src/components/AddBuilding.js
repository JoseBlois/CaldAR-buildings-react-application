import React , { Component } from 'react';

class AddBuilding extends Component {

  state = {
    name: '',
    address: '',
    company: '',
    boiler1: '',
    boiler2: '',
    boiler3: '',
  }

  changeValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  submition = (e) => {
    e.preventDefault();
    const newBuilding = {
      name: this.state.name,
      address: this.state.address,
      company: this.state.company,
      boilers: [ this.state.boiler1, this.state.boiler2, this.state.boiler3]
    }
    this.props.addBuilding(newBuilding);
    this.setState( {
      name: '',
      address: '',
      company: '',
      boiler1: '',
      boiler2: '',
      boiler3: '',
    });
  }

  render(){
    return (
      <form onSubmit={this.submition}>
        <div className="form-group">
          <label for="name" >Building's Name</label>
          <input value={this.state.name} onChange={this.changeValue} name="name" id="name" type="text" required />
        </div>
        <div className="form-group">
          <label for="address" >Building's Address</label>
          <input value={this.state.address} onChange={this.changeValue} name="address" id="address" type="text" required />
        </div>
        <div className="form-group">
          <label for="company" >Building's Company</label>
          <input value={this.state.company} onChange={this.changeValue} name="company" id="company"  type="text" required />
        </div>
        <div className="form-group">
          <label for="boiler1" >Building's Boiler 1</label>
          <input value={this.state.boiler1} onChange={this.changeValue} name="boiler1" id="boiler1" type="text" required />
        </div>
        <div className="form-group">
          <label for="boiler2" >Building's Boiler 2</label>
          <input value={this.state.boiler2} onChange={this.changeValue} name="boiler2" id="boiler2" type="text" />
        </div>
        <div className="form-group">
          <label for="boiler3" >Building's Boiler 3</label>
          <input value={this.state.boiler3} onChange={this.changeValue} name="boiler3" id="boiler3" type="text" />
        </div>
          <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default AddBuilding;