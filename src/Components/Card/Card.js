import React from 'react';
import './Card.css'
import { connect } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div>
          {this.props.Current[0]}
        </div>
        <div>
          {this.props.Current[1]}
        </div>
        <div>
          {this.props.Current[2]}
        </div>
        <div>
          {this.props.Current[3]}
        </div>
        <div>
          {this.props.Current[4]}
        </div>
        <div>
          {this.props.Current[5]}
        </div>

        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src={(this.props.Current[4])} alt={this.props.Current[4]} waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
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
