import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class MyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            simpleValue: ''
          };
        
        this.newAddress=this.newAddress.bind(this)
        this.updateInputValue=this.updateInputValue.bind(this)
    }

    newAddress () {
        this.props.addAddress(this.state.value);
        this.setState ({
            simpleValue: '',
            value: ''
        })
    }

    updateInputValue(val) {
        this.setState({
          value: <div key={val.target.value} style={{marginTop: '1vh'}}>{val.target.value}</div>,
          simpleValue: val.target.value
        });
      }

    render() {
        return (
            <div>
            <Input style={{marginLeft: '25vw', width: '50vw'}} value={this.state.simpleValue} placeholder="username" onChange={val => this.updateInputValue(val)}/>
            <div style={{margin: '5vh'}}><Button outline color="primary" onClick={this.newAddress}>primary</Button>{' '}</div>
        </div>
        );
    }
}

export default MyInput;
