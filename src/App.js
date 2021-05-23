import "./styles.css";
import React, { Component } from "react";
import axios from "axios";
import background from "./images/kanhaiya1.jpg";

class App extends Component {
  state = {
    advice: ""
  };
  componentDidMount() {
    this.fetchAdvice();
    console.log("Component Mounted");
  }
  componentDidUpdate() {
    console.log("Component updated");
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      // const {advice}=this.state
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
