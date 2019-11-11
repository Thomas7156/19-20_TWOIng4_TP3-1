import React from 'react';
import './Card.css'
import { connect } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "blue lighten-4"
    };
  }

  changeBg() {
    if(this.state.bgColor === "blue lighten-4") {
      this.setState({
        bgColor: ""
      });
    } else {
      this.setState({
        bgColor: "blue lighten-4"
      });
    }
  }

  render() {
    return (
      <div>
        <MDBCol>
          <MDBCard className={this.state.bgColor} style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid rounded" src={this.props.Current[4]} alt={this.props.Current[4]} waves />
            <MDBCardBody>
              <MDBCardTitle>
                {this.props.Current[0]+ " "}
                {this.props.Current[1]}
              </MDBCardTitle>
              <MDBCardText>
                {this.props.Current[2]}
              </MDBCardText>
              <MDBBtn onClick={() => this.changeBg()}>Changer le style</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Current: state.setCurrent.Current
  }
}

export default connect(mapStateToProps)(Card);
