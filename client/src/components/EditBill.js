import React, { Component } from 'react';
import axios from 'axios';

class EditBill extends Component {
  constructor(){
    super();

    this.state = {
      utility: '',
      company: '',
      phone_number: '',
      account_number: '',
      name: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    const newState = {
      [name]: value
    }

    this.setState(newState);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event);
    const id = this.props.match.params.house_id;
    console.log(id);
    axios.post(`/api/houses/${id}/bills`, {
      utility: this.state.utility,
      company: this.state.company,
      phone_number: this.state.phone_number,
      account_number: this.state.account_number,
      name: this.state.name,
      email: this.state.email,
    })
    // event.preventDefault();
    // console.log(event);
    // const id = this.props.match.params.id;
    // axios.post(`/api/houses/${id}/bills`, {
    //   utility: this.state.utility,
    //   company: this.state.company,
    //   phone_number: this.state.phone_number,
    //   account_number: this.state.account_number,
    //   name: this.state.name,
    //   email: this.state.email
    // })
    .catch((err) => {
      console.log(err);
    })
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
        <label>Utility Type</label>
        <input type="text" name ="utility" value={this.state.utility} onChange={(e) => this.handleChange(e)} />
        <label>Company Name</label>
        <input type="text" name ="company" value={this.state.company} onChange={(e) => this.handleChange(e)} />
        <label>Company Phone #</label>
        <input type="text" name ="phone_number" value={this.state.phone_number} onChange={(e) => this.handleChange(e)} />
        <label>Account #</label>
        <input type="text" name ="account_number" value={this.state.account_number} onChange={(e) => this.handleChange(e)} />
        <label>Name on Account</label>
        <input type="text" name ="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
        <label>Email on Account</label>
        <input type="text" name ="utility" value={this.state.utility} onChange={(e) => this.handleChange(e)} />
        <input type="submit" value="submit" />
        </form>
        
      </div>
    );
  }
}

export default EditBill;