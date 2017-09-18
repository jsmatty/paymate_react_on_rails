import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import styled from 'styled-components';

class SplashPage extends Component {
    render() {
        return (
                <div>
                <SplashPageContainer>
                <br />
                <br />
                <br />
                <br />
                <h3> Pay/<strong>Mate</strong></h3>
                <br />
                <h2>Life can be complicated. Paying bills doesn't have to be.</h2>
                </SplashPageContainer>
                </div>
        );
    }
}
export default SplashPage;