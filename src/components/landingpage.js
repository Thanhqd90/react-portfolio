import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
        <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
        <Cell col={12}>
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" className="avatar-img1"/>
        <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
        <hr/>
            <p>HTML | CSS | Bootstrap | Javascript | jQuery | node.js | React.js | Angular | Express | MySQL | MongoDB</p>
        <div className ="social-links">
        <a href="www.linkedin.com" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-linkedin"></i>
        </a>

        <a href="www.linkedin.com" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-github-square"></i>
        </a>
        <a href="www.linkedin.com" rel="noopener noreferrer" target="_blank">
            <i class="fas fa-code"></i>
        </a>

        
        </div>
        </div>
        </Cell>
        </Grid>
        </div>
        )
    }
}

export default LandingPage;