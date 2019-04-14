import React, { Component } from 'react';
import MyInput from '../src/components/input'
import TextDisplay from '../src/components/text-display'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      addressBook: []
    }

    this.addAddress=this.addAddress.bind(this)
  }

  addAddress(address) {
    let addressBook = this.state.addressBook
    addressBook.push(address)

    this.setState({
      addressBook
    })

    console.log(this.state.addressBook)
  }

  render() {
    let addressBook = []
    let address = ''

    return (
      <div className="App">
       <MyInput addAddress={this.addAddress}/>
       <TextDisplay address={address} addressBook={addressBook}></TextDisplay>
      </div>
    );
  }
}

export default App;
