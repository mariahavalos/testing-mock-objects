import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class MyProgress extends Component {
    constructor(props) {
        super(props);

        this.getValue = this.getValue.bind(this)
    }
    getValue() {
        return this.props.friendsList.length / 5 * 100
    }

    render() {
        return (
            <div style={{margin: '10vh'}}>
                Your friend list is currently {this.getValue()}% full.
                <Progress value={this.getValue()} />
            </div>
        );
    }
}

export default MyProgress;
