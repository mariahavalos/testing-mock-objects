import React, { Component } from 'react';
import MyInput from '../src/components/input'
import TextDisplay from '../src/components/text-display'
import MyProgress from '../src/components/progress-bar'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      friendsList: []
    }

    this.addFriend=this.addFriend.bind(this)
  }

  addFriend(friend) {
    let friendsList = this.state.friendsList
    friendsList.push(friend)

    this.setState({
      friendsList
    })
  }

  render() {

    return (
      <div className="App">
       <MyInput friendsList={this.state.friendsList} addFriend={this.addFriend}/>
       <MyProgress friendsList={this.state.friendsList}/>
       <TextDisplay friendsList={this.state.friendsList}/>
      </div>
    );
  }
}

export default App;
