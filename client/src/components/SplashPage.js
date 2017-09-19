import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalNav from './GlobalNav';

const HomePageContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100vh;
width: 100%;
background-image: url("https://i.imgur.com/GplErGw.jpg");
background-size: cover;
min-height: 100%;
min-width: 1024px;
position: fixed;
top: 0;
left: 0;

}`

class SplashPage extends Component {
    render() {
        return (
                
                <HomePageContainer>
                <GlobalNav />
                <div>
                <br />
                <br />
                <br />
                <br />
                {/*<h3></h3>*/}
                <br />
                {/*<h2>Life can be complicated. Paying bills doesn't have to be.</h2>*/}
                </div>
                </HomePageContainer>
        );
    }
}
export default SplashPage;