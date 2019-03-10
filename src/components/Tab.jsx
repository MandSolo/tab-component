import React, { Component } from "react";

class Tab extends Component {
  render() {
    return (
      <div className="Tab-container">
        <div className="Tab-buttons">
          <button class="tablinks" onclick="openTab(event, 'TabOne')">
            TabOne
          </button>
          <button class="tablinks" onclick="openTab(event, 'TabTwo')">
            TabTwo
          </button>
          <button class="tablinks" onclick="openTab(event, 'TabThree')">
            TabThree
          </button>
        </div>

        <div id="TabOne" className="Tab-content">
          <h3>TabOne</h3>
          <p>
            Follow the lay of the land. It's most important. If you do too much
            it's going to lose its effectiveness. I'm a water fanatic. I love
            water. I can't think of anything more rewarding than being able to
            express yourself to others through painting.
          </p>
        </div>

        <div id="TabTwo" className="Tab-content">
          <h3>TabTwo</h3>
          <p>
            This is a happy place, little squirrels live here and play. But
            we're not there yet, so we don't need to worry about it. Painting
            should do one thing. It should put happiness in your heart. That is
            when you can experience true joy, when you have no fear.
          </p>
        </div>

        <div id="TabThree" className="Tab-content">
          <h3>TabThree</h3>
          <p>
            Everything's not great in life, but we can still find beauty in it.
            We'll put a happy little sky in here. In painting, you have
            unlimited power. You have the ability to move mountains. Let the
            paint work.
          </p>
        </div>
      </div>
    );
  }
}

export default Tab;
