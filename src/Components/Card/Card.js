import React from 'react';
import './Card.css'
import { connect } from 'react-redux'

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
