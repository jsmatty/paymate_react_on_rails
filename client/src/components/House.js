import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AllBills from './AllBills';
import AllUsers from './AllUsers';




class House extends Component {

  constructor(){
    super();
    this.state = {
      bills: [],
      users: []
    }
  }

  componentWillMount(){
    this._fetchUsers[];
  }

  _fetchUsersAndBills = async () => {
    console.log("fetch users and bills success")
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/houses/${id}/bills`)
    console.log(res);
    this.setState({
      users: res.data.users,
      bills: res.data.bills
    })
  }

  render() {
    const id = this.props.match.params.id;
    
    return (
      
      <div >
        <h4>{this.state.house.nickname}</h4>
        <p>Ello Mates!</p>

        <Link to={`/houses/${id}/bills`}>
          <p>Utility Bills</p>
        </Link>

        <AllBills bills={this.state.bills} houseId={this.props.match.params.id}/>
    
      </div>
    );
  }
}

export default House;