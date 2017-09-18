import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import HouseCard from './HouseCard';


class HouseList extends Component {

  constructor(){
    super();
    this.state = {
      errors: '',
      houses: []
    }
  }

  componentWillMount(){
    this._fetchHouses();
  }

  _fetchHouses = async () => {
    try {
      const res = await axios.get('/api/houses');
      const houses = res.data;
      this.setState({houses});
    } catch (err) {
      this.setState({error: err})
    }
  }

  render() {
    return (
      <div>      
        <h5>HouseHolds</h5>
        {this.state.houses.map((house) => (
          <HouseCard key={house.id} house={house}/>)
        )}
      </div>
    );
  }
}

export default HouseList;