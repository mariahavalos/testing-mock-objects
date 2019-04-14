import React, { Component } from 'react';
import MyInput from '../src/components/input'
import TextDisplay from '../src/components/text-display'
import MyProgress from '../src/components/progress-bar'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      friendsList: []
    }

    this.addAddress=this.addAddress.bind(this)
  }

  addAddress(friend) {
    let friendsList = this.state.friendsList
    friendsList.push(friend)

    this.setState({
      friendsList
    })
  }

  render() {
    let friendsList = []
    let friend = ''

    return (
      <div className="App">
       <MyInput addAddress={this.addAddress}/>
       <MyProgress friendsList={this.state.friendsList}/>
       <TextDisplay friendsList={this.state.friendsList}/>
      </div>
    );
  }
}

export default App;
