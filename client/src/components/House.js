import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import AllBills from './AllBills';




class house extends Component {

  constructor(){
    super();
    this.state = {
      house: {},
      bills: []
    }
  }

  componentWillMount(){
    this._fetchHouseAndBills();
  }

  _fetchHouseAndBills = async () => {
    console.log("fetch house and bills success")
    const id = this.props.match.params.id;
    const res = await axios.get(`/api/houses/${id}/bills`)
    console.log(res);
    this.setState({
      house: res.data.house,
      bills: res.data.bills
    })
  }

  render() {
    const id = this.props.match.params.id;
    
    return (
      
      <div >
        <h4>{this.state.house.house_nickname}</h4>
        <p>Ello Mates!</p>

        <Link to={`/houses/${id}/bills`}>
          <p>Utility Bills</p>
        </Link>

        <AllBills bills={this.state.bills} houseId={this.props.match.params.id}/>
    
      </div>
    );
  }
}

export default house;