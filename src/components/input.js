import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class MyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
          };
        
        this.newAddress=this.newAddress.bind(this)
        this.updateInputValue=this.updateInputValue.bind(this)
    }

    newAddress () {
        this.props.addAddress(this.state.value);
    }

    updateInputValue(val) {
        this.setState({
          value: val.target.value
        });
      }

    render() {
        return (
            <div>
            <Input placeholder="username" onChange={val => this.updateInputValue(val)}/>
            <div><Button outline color="primary" onClick={this.newAddress}>primary</Button>{' '}</div>
        </div>
        );
    }
}

export default MyInput;
