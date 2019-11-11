import React from 'react';
import './Navbar.css'
import { connect } from 'react-redux'
import { MDBBtn } from 'mdbreact';

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
        <MDBBtn color="info" onClick={() => this.handleClick("Gregoire")}>
          Grégoire
        </MDBBtn>
        <MDBBtn color="info" onClick={() => this.handleClick("Leonard")}>
          Léonard
        </MDBBtn>
        <MDBBtn color="info" onClick={() => this.handleClick("Thomas")}>
          Thomas
        </MDBBtn>
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
