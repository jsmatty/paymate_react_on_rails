import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserCard = (props) => {
  const user = props.user;
  return (
    
    <div>
      <div>
        <Link to={`/houses/${house.id}/users/${user.id}`}>
          <img src={user.image} alt="https://i.imgur.com/b8mlwg5.jpg?1"/>
        </Link>
      </div>
    </div>
  
  );
};

export default UserCard;