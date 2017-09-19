import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AllBills from './AllBills';
import AllUsers from './AllUsers';
import BillCard from './BillCard';
import UserCard from './UserCard';
import Bill from './Bill';
import User from './User';



class House extends Component {
  constructor(){
    super();

    this.state = {
      nickname: '',
      bills: [],
      users: []
    }
  }


  componentWillMount(){
    const id = this.props.match.params.id;
    axios.get(`/api/houses/${id}`).then((res) => {
      const bills = res.data.bills;
      const users = res.data.users;
    
    this.setState({
      nickname: res.data.house.nickname,
      bills: bills,
      users: users
    })
      console.log(res);
    })
    console.log('This is the House Id: ' + id );
  }

  _deleteBill = async () => {
    console.log(this.props)
    const id = this.props.match.params.id;
    const billId = this.props.match.params.bill.id;
    console.log('This is the delete function!' + billId);

    const res = await axios.delete(`/api/houses/${id}/bills/${billId}`)
    const redirect = !this.state.redirect
    this.setState({ redirect })
  }

  render() {
        const id = this.props.match.params.id;

    const users = this.state.users.map((user, i) => (
      <div key={i}>
        <h2>Username: {user.username}</h2>
        <img src={user.image} alt="https://i.imgur.com/b8mlwg5.jpg?1"/>
        <h4>Name: {user.name}</h4>
        <h4>Bio: {user.bio}</h4>
        <h4>Birthday: {user.birthday}</h4>
      </div>
    ));

    const bills = this.state.bills.map((bill, i) => (
                <div key= {i}>
                  <h2>Utility Type: {bill.utility}</h2>
                  <h4>Company: {bill.company}</h4>
                  <h4>Company phone number: {bill.phone_number}</h4>
                  <h4>Account Number: {bill.account_number}</h4>
                  <h4>Name on account: {bill.name}</h4>
                  <h4>Email on account: {bill.email}</h4>
                  {bill.id}
                <Link to={`/houses/${id}/bill/:id/edit`}>
                <h4>Edit</h4>
                </Link> 
                <button onClick={this._deleteBill}>Delete</button>
                </div>
            ));

    return (
      <div>
        <h1>{this.state.nickname}</h1>
        
          
          <Link to={`/houses/${id}/bill/new`}>
            <h4>NEW BILL</h4>
          </Link>
          
       
        <h2>{users}</h2>
        <h2>{bills}</h2>


      </div>
    );
  }
}

export default House;

