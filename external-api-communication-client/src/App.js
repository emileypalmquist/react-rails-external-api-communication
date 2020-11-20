import React, { Component } from "react";
import "./App.css";

const API = "http://localhost:3000";

class App extends Component {
  state = {
    explanation: "explanation here",
    date: "date here",
    copyright: "copyright goes here",
    imageUrl: "",
  };

  componentDidMount() {
    fetch(API + `/get_image`)
      .then((resp) => resp.json())
      .then((data) => {
        const { explanation, date, url, copyright } = data;

        this.setState({
          explanation: explanation,
          date: date,
          imageUrl: url,
          copyright: copyright,
        });
      });
  }

  handleChange = (e) => {
    fetch(API + `/get_image?date=${e.target.value}`)
      .then((resp) => resp.json())
      .then((data) => {
        const { explanation, date, url, copyright } = data;
        this.setState({
          explanation: explanation,
          date: date,
          imageUrl: url,
          copyright: copyright,
        });
      });
  };

  render() {
    const { imageUrl, explanation, date, copyright } = this.state;
    return (
      <div style={{ position: "fixed" }}>
        <h1>{copyright}</h1>
        <h6>{date}</h6>
        <p>{explanation}</p>
        <img
          style={{ maxHeight: "500px" }}
          src={imageUrl}
          alt="this will be a cool pic"
        />
        <br />
        <input type="date" onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
