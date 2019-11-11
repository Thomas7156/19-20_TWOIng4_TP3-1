import React from 'react';
// import { connect } from 'react-redux'
import './App.css';
import Navbar from '../Components/Navbar/Navbar.js';
import Tweet from '../Components/Tweet/Tweet.js';
import Card from '../Components/Card/Card.js';
import {MDBContainer  } from 'mdbreact';

class App extends React.Component {
  render() {
    return (
      <MDBContainer className="d-flex flex-column flex-center text-center">
        <Navbar className=""/>
        <Card className=""/>
        <Tweet className=""/>
      </MDBContainer>
    );
  }
}

export default App;
