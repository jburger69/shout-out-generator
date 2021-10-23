import React from "react";
import Button from '@mui/material/Button';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      inspirationalMessages: [
        "Act as if what you do makes a difference. It does.", 
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "Never bend your head. Always hold it high. Look the world straight in the eye.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Believe you can and you're halfway there.",
        "When you have a dream, you've got to grab it and never let go."
      ]
    };
  }

  handleOnClick = () => {
    
  }



  render () {
    return (
      <div className="App">
        <h1>Shout-out Generator</h1>
        <Button variant="contained" onClick={this.handleOnClick}>Click to Generate</Button>
      </div>
    );
  }



}

export default App;
