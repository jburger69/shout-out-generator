import React from "react";
import inspirationalMessages from './Data';
import InspirationalMessage from "./components/InspirationalMessage";


class App extends React.Component {


  state = {
    inspirationalMessage: inspirationalMessages[0].inspirationalMessage
  }

  generateRandomMessage = (arr) => {
    let num = Math.floor(Math.random() * inspirationalMessages.length)

    let newMessage = inspirationalMessages[num];

    this.setState({
      inspirationalMessage: newMessage.inspirationalMessage
    })

    this.randomizeMessages(inspirationalMessages)
  }

  randomizeMessages = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }



  render () {
    return (
      <div className="App">
        <h1 className='center'>Inspirational Message Generator</h1>
        <InspirationalMessage generateRandomMessage={this.generateRandomMessage}
          inspirationalMessage={this.state}/>
      </div>
    );
  }



}

export default App;
