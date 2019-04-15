import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

class MyInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            simpleValue: ''
          };
        
        this.newFriend=this.newFriend.bind(this)
        this.updateInputValue=this.updateInputValue.bind(this)
        this.isDisabled=this.isDisabled.bind(this)
    }

    newFriend() {
        if (this.state.simpleValue !== ''){
            this.props.addFriend(this.state.value);
            this.setState ({
                simpleValue: '',
                value: ''
            })
        }
    }

    isDisabled() {
        return this.props.friendsList.length >= 5;
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
            <Input id='input' disabled={this.isDisabled()} style={{marginLeft: '25vw', width: '50vw'}} value={this.state.simpleValue} placeholder="username" onChange={val => this.updateInputValue(val)}/>
            <div style={{margin: '5vh'}}><Button id='button' disabled={this.isDisabled()} color="primary" onClick={this.newFriend}>primary</Button>{' '}</div>
        </div>
        );
    }
}

export default MyInput;
