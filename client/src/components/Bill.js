import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';



class Bill extends Component {
  constructor(){
    super();
    this.state = {
      redirect: false,
      house: {},
      bills: []
      
    }
  }

  componentWillMount(){
    this._fetchBill();
  }

  _fetchBill = async () => {
    const houseId = this.props.match.params.houseId;
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/houses/${id}/bills/${id}`)
    this.setState({
      house: res.data.house,
      bill: res.data.bill,
    })
    // console.log(res.data)
  }
  
  _deleteBill = async () => {
    const houseId = this.props.match.params.houseId;
    const id = this.props.match.params.id;
    const res = await axios.delete(`/api/houses/${id}/bills/${id}`)
    const redirect = !this.state.redirect
    this.setState({ redirect })
  }

  render(){
    const houseId = this.props.match.params.houseId;
    const id = this.props.match.params.id;
    

    return (
      <div>
        <h2>
        </h2>
        <div>
          
        <h2>Utility Type: {this.state.utility}</h2>
        <h4>Company: {this.state.company}</h4>
        <h4>Company phone number: {this.state.phone_number}</h4>
        <h4>Account Number: {this.state.account_number}</h4>
        <h4>Name on account: {this.state.name}</h4>
        <h4>Email on account: {this.state.email}</h4>
        
        </div>
        <div>
          <Link to={`/houses/${id}/bills/${id}`}><button onClick={this._editbill}>Edit</button></Link>
          <button onClick={this._deletebill}>Delete</button>
          {this.state.redirect && (<Redirect to={`/houses/${id}/bills`}/>)}
        </div>
      
      </div>
    );
  }
}

export default Bill;