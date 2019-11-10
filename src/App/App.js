import React from 'react';
// import { connect } from 'react-redux'
import './App.css';
import Navbar from '../Components/Navbar/Navbar.js';
import Tweet from '../Components/Tweet/Tweet.js';
import Card from '../Components/Card/Card.js';

class App extends React.Component {
  render() {
    return (
      <div className="main_container">
        <Navbar className="navbar"/>
        <Card className="card"/>
        <Tweet className="tweet"/>
      </div>
    );
  }
}

export default App;
