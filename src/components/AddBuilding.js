import React , { Component } from 'react';

const containerStyle = {
  margin: '20px auto',
  backgroundColor: '#ff5800',
  textAlign: 'center',
};

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
      <div style={containerStyle}>
        <h2>Add building panel</h2>
        <form className="add-form" onSubmit={this.submition}>
          <div className="form-group">
            <label for="name" >Building Name</label>
            <input value={this.state.name} onChange={this.changeValue} name="name"pe="text" required />
          </div>
          <div className="form-group">
            <label for="address" >Building Address</label>
            <input value={this.state.address} onChange={this.changeValue} name="address" type="text" required />
          </div>
          <div className="form-group">
            <label for="company" >Building Company</label>
            <input value={this.state.company} onChange={this.changeValue} name="company"  type="text" required />
          </div>
          <div className="form-group">
            <label for="boiler1" >Building Boiler 1</label>
            <input value={this.state.boiler1} onChange={this.changeValue} name="boiler1" type="text" required />
          </div>
          <div className="form-group">
            <label for="boiler2" >Building Boiler 2</label>
            <input value={this.state.boiler2} onChange={this.changeValue} name="boiler2" type="text" />
          </div>
          <div className="form-group">
            <label for="boiler3" >Building Boiler 3</label>
            <input value={this.state.boiler3} onChange={this.changeValue} name="boiler3" type="text" />
          </div>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddBuilding;