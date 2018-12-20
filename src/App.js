import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './components/main';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
    <Header style={{borderBottom: "white 1px solid"}} className="header-color" title={<Link style={{textDecoration: "none", color: "white"}} to="/">Thanh Dang</Link>} scroll>
            <Navigation>
                <Link className="hover" to="/">Home</Link>
                <Link className="hover" to="/resume">Resume</Link>
                <Link className="hover" to="/aboutme">About Me</Link>
                <Link className="hover" to="/projects">Projects</Link>
                <Link className="hover" to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Thanh Dang">
            <Navigation>
              <Link className="hover" to="/">Home</Link>
                <Link className="hover" to="/resume">Resume</Link>
                <Link className="hover" to="/aboutme">About Me</Link>
                <Link className="hover" to="/projects">Projects</Link>
                <Link className="hover" to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
