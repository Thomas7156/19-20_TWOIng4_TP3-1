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
      <div className="p-4">
        <MDBCol>
          <MDBCard className="align-items-center" color={this.state.bgColor} style={{ width: "30rem"}}>
            <MDBCardImage className="p-2 img-fluid rounded-circle" style={{width: "10rem", height: "10rem"}} src={this.props.Current.img} alt={this.props.Current.img} waves />
            <MDBCardBody>
              <MDBCardTitle>
                {this.props.Current.firstName+ " "}
                {this.props.Current.lastName}
              </MDBCardTitle>
              <MDBCardText>
                {this.props.Current.birth}
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
