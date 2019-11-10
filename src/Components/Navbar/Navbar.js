import React from 'react';
import './Navbar.css'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleClick(name) {
    const action = { type: name};

    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("Gregoire")}>
          Grégoire
        </button>
        <button onClick={() => this.handleClick("Leonard")}>
          Léonard
        </button>
        <button onClick={() => this.handleClick("Thomas")}>
          Thomas
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Current: state.setCurrent.Current
  }
}

export default connect(mapStateToProps)(Navbar);
