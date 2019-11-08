import React from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar.js';
import Tweet from '../Components/Tweet/Tweet.js';
import Card from '../Components/Card/Card.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Profils: [{
        Gregoire: Array(4).fill("Gregoire", "Lenclud", "08/10/98", "/img/Gregoire.png"),
        Leonard: Array(4).fill("Leonard", "Devincre", "13/03/98", "/img/Leonard.jpg"),
        Thomas: Array(4).fill("Thomas", "Lemercier", "07/01/99", "/img/Thomas.png")
      }]
    };
  }

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
