import React, { Component } from "react";

class Tab extends Component {
  state = {
    data: [
      {
        Title: "Tab One",
        Text: `Follow the lay of the land. It's most important. If you do too much
        it's going to lose its effectiveness. I'm a water fanatic. I love
        water. I can't think of anything more rewarding than being able to
        express yourself to others through painting.`
      },
      {
        Title: "Tab Two",
        Text: `This is a happy place, little squirrels live here and play. But
        we're not there yet, so we don't need to worry about it. Painting
        should do one thing. It should put happiness in your heart. That is
        when you can experience true joy, when you have no fear.`
      },
      {
        Title: "Tab Three",
        Text: `Everything's not great in life, but we can still find beauty in it.
        We'll put a happy little sky in here. In painting, you have
        unlimited power. You have the ability to move mountains. Let the
        paint work.`
      }
    ],
    index: 0
  };

  render() {
    console.log(this.state.index);

    console.log(this.state.data[this.state.index]);

    return (
      <div className="Tab-container">
        <div className="Tab-buttons">
          <button class="Tab-links" onClick={() => this.setState({ index: 0 })}>
            Tab One
          </button>
          <button class="Tab-links" onClick={() => this.setState({ index: 1 })}>
            Tab Two
          </button>
          <button class="Tab-links" onClick={() => this.setState({ index: 2 })}>
            Tab Three
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
