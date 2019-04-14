import React, { Component } from 'react';

class TextDisplay extends Component {
  render() {
    return (
        <div>{this.props.friendsList}</div>
    );
  }
}

export default TextDisplay;
