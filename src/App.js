import React from 'react';
import Navbar from './Navbar.js'
import Tweet from './Tweet.js'
import Card from './Card.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Profils: [{
        Gregoire: Array(4).fill("Gregoire", "Lenclud", "08/10/98", "/img/Gregoire.png"),
        Leonard: Array(4).fill("Leonard", "Devincre", "13/03/98", "/img/Leonard.jpg"),
        Thomas: Array(4).fill("Thomas", "Lemercier", "07/01/99", "/img/Thomas.png")
      }]
    }
  }

  return (
    <div style={styles.main_container}>
      <Navbar style={styles.navbar}/>
      <Card style={styles.card}/>
      <Tweet style={styles.tweet}/>
    </div>
  );
}

const styles = StyleSheet.create({
  main_container: {

  },
  navbar: {

  },
  card: {

  },
  tweet: {

  }
})

export default App;
