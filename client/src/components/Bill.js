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
  g
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
          <Link to={`/houses/${id}/bills`}>{this.state.house.nickname}</Link>
        </h2>
        <div>
          
        <h2>Utility Type: {this.state.utility}</h2>
        <h4>Company: {this.state.company}</h4>
        <p>Company phone number: {this.state.phone_number}</p><br/>
        <h2>Account Number: {this.state.account_number}</h2>
        <h3>Name on account: {this.state.name}</h3>
        <p>Email on account: {this.state.email}</p>
        
        </div>
        <div>
          <Link to={`/houses/${id}/bills/${id}`}><button onClick={this._editbill}>Edit this Bill</button></Link>
          <button onClick={this._deletebill}>Delete this Bill</button>
          {this.state.redirect && (<Redirect to={`/houses/${id}/bills`}/>)}
        </div>
      
      </div>
    );
  }
}

export default Bill;