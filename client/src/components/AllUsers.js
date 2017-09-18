import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import UserCard from './UserCard';



class AllUsers extends Component {


  render() {
    return (
      
      <div>
        {this.props.users.map((user) => (
          <UserCard key={user.id} user={user} houseId={this.props.houseId}/>)
        )}
      </div>
    );
  }
}  

AllUsers.defaultProps = {
  users: []
}


export default AllUsers;

