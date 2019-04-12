import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-138224838-1");
  ReactGA.pageview("/homepage");
}

// handleClick = event => {
//   const { keypressed } = event.target;
//   console.log("keypressed", keypressed);
//   this.setState(
//     () => ({ keypressed }),
//     () => console.log("keypressed", this.state.keypressed)
//   );
// };

class App extends Component {
  onButtonClick = () => {
    ReactGA.event({
      category: "onClick",
      action: "Press a button"
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>Click Me </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
