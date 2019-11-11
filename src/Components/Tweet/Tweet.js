import React from 'react';
import './Tweet.css'
import { connect } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  like(name) {
    const action = { type: name};

    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <MDBCol>
          <MDBCard className="d-flex flex-center" style={{ width: "22rem" }}>
            <MDBCardBody>
              <MDBCardText>
                {this.props.Current.tweet}
              </MDBCardText>
              <MDBBtn color="success"  onClick={() => this.like('INCREASE')}><MDBIcon far icon="thumbs-up" /></MDBBtn>
              <MDBBtn color="success"  onClick={() => this.like('DECREASE')}><MDBIcon far icon="thumbs-down" /></MDBBtn>
              <MDBBtn color="success">{this.props.Current.like}</MDBBtn>
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

export default connect(mapStateToProps)(Tweet);
