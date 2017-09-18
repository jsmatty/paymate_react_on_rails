import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BillCard = (props) => {
  const id = props.house.Id;
  const bill = props.bill;

  
  return (
    
    <div>
      <div>
        <Link to={`/houses/${id}/bills/${bill.id}`}>
          <h5>{bill.utility}</h5>
        </Link>
      </div>
    </div>
  
  );
};

export default BillCard;