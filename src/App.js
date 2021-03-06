import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";
import Modal from "../src/components/Modal";

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
  constructor() {
    super();

    this.state = {
      isShowing: false
    };
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  onButtonClick = () => {
    console.log("clicked");
    ReactGA.event({
      category: "onClick",
      action: "Press a button"
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={this.onButtonClick}>Click Me </button>
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

        <div>
          {this.state.isShowing ? (
            <div onClick={this.closeModalHandler} className="back-drop" />
          ) : null}

          <button className="open-modal-btn" onClick={this.openModalHandler}>
            Open Modal
          </button>

          <Modal
            className="modal"
            show={this.state.isShowing}
            close={this.closeModalHandler}
          >
            Maybe aircrafts fly very high because they don't want to be seen in
            plane sight?
          </Modal>
        </div>
      </>
    );
  }
}

export default App;
