import React, {Component} from 'react';

        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>


class ChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;
