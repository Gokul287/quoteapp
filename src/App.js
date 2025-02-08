import React from "react";
import axios from "axios";

import "./App.css";
class App extends React.Component {
  state = { advice: "" };

  componentDidMount() {
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <div className="app">
      <h1 className="h1">Generate Quote</h1>
        <div className="card">
          <h1 className="con">{advice}</h1>
          <button onClick={this.fetchAdvice}>Give Me Advice</button>
        </div>
      </div>
    );
  }
}

export default App;
