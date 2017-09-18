import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const HouseCard = (props) => {
  const house = props.house;
  return (
    // <houseCardStyle>
    <div>
      <div>
        <Link to={`/houses/${id}`}>
          <h5>{house.house_nickname}</h5>
        </Link>
      </div>
    </div>
    // </houseCardStyle>
  );
};

export default HouseCard;