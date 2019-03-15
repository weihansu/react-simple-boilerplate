import React, {Component} from 'react';

class ChatBar extends Component {

  render() {
    console.log("render <ChatBar />");

    return (
      <footer className="chatbar">
        <input className="chatbar-username" name="inputName" placeholder="Your Name" onChange={this.props.sendName} />
        <input className="chatbar-message" name="inputMessage" placeholder="Type a message and hit ENTER" onKeyDown={this.props.sendMessage}/ >
      </footer>
    );
  };
};

export default ChatBar;
