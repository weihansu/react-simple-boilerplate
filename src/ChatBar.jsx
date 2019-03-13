import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    console.log("render <ChatBar />");
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.defaultValue} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
}

export default ChatBar;
