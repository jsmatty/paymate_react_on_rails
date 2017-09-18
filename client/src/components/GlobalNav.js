import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GlobalNav = () => {
  return (
    <Nav>
      <Link to="/">
        <h1>P/M</h1>
      </Link>
      <div>
       <h1><Link to="/houses">HouseHold</Link></h1>
        {/* <Link to="/signup">Sign Up!</Link> */}
      </div>
    </Nav>
  );
};

export default GlobalNav;