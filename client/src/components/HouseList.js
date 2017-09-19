import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import HouseCard from './HouseCard';
import House from './House';


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
    const houses = this.state.houses.map((house, i) => (
      <div key = {i}>
        <Link to={`/houses/${house.id}`}>
            <div key={house.id}>
              <h1>{house.nickname}</h1>
            </div>
          </Link>
          
      </div>  
    ));
    return (
      <div>
        <h1>{houses}</h1>
        <House house={this.props.houses}/>
        </div>
  //     <div>      
  //       <h5>HouseHolds</h5>
  //       {this.state.houses.map( (house) => {
  //         return (
          //   <Link to={`/houses/${house.id}`}>
          //   <div key={house.id}>
          // <HouseCard key={house.id} house={house} />
          // <div style={{display: "flex", justifyContent: "center"}}>
            
          //   </div>
          //   </div>
          // </Link>
          
  //           )
  //         })};
  //     </div>

  //   );
    )
  }
}

export default HouseList;