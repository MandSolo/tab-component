import React, { Component } from "react";
import "../styling/Tab.css";

import data from "../data/tabData.json";

class Tab extends Component {
  state = {
    data,
    index: 0
  };

  render() {
    return (
      <div className="Tab-container">
        <div className="Tab-buttons">
          <button
            className="Tab-link"
            onClick={() => this.setState({ index: 0 })}
          >
            {this.state.data[0].Title}
          </button>
          <button
            className="Tab-link"
            onClick={() => this.setState({ index: 1 })}
          >
            {this.state.data[1].Title}
          </button>
          <button
            className="Tab-link"
            onClick={() => this.setState({ index: 2 })}
          >
            {this.state.data[2].Title}
          </button>
        </div>

        <div className="Tab-content">
          <h3>{this.state.data[this.state.index].Title}</h3>
          <p>{this.state.data[this.state.index].Text}</p>
        </div>
      </div>
    );
  }
}

export default Tab;
