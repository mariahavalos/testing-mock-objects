import React, { Component } from 'react';

class TextDisplay extends Component {
  render() {
    return (
        <div id="text-display">{this.props.friendsList}</div>
    );
  }
}

export default TextDisplay;
